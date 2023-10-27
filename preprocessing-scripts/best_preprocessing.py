import numpy as np
import os
import time
import json
import calendar

# Temperatura mas minima
# Temperatura mas maxima
# Precipitacion mas maxima

def get_data_from_file(directory):

    data = []

    with open(directory, 'r') as f:

        lines = f.readlines()

        for line in lines:
            xyz = line.split(',')
            x, y, z = map(float, xyz)

            data.append([x, y, z])

    return np.array(data)

def generate_json():

    prec_data = np.array([])
    tmax_data = np.array([])
    tmin_data = np.array([])

    # Carpetas donde se encuentran los archivos
    prec_path = './XYZ/prec/prec_'
    tmax_path = './XYZ/tmax/tmax_'
    tmin_path = './XYZ/tmin/tmin_'

    data = []
    first_epoch = True

    for year in range(2020, 2022):

        for month in range(1, 13):

            termination = f'{year}-{str(month).zfill(2)}.xyz'

            prec_data = get_data_from_file(prec_path + termination)
            tmax_data = get_data_from_file(tmax_path + termination)
            tmin_data = get_data_from_file(tmin_path + termination)

            lat = prec_data[:, 1]
            lng = prec_data[:, 0]

            prec = prec_data[:, 2]
            tmax = tmax_data[:, 2]
            tmin = tmin_data[:, 2]

            days = calendar.monthrange(year, month)[1]
            hours_per_day = 24
            divisor = days

            for i in range(len(lat)):

                current_lat = lat[i]
                current_lng = lng[i]
                current_prec = prec[i] / divisor
                current_tmax = tmax[i]
                current_tmin = tmin[i]


                if first_epoch == True:

                    new_row = {
                        "lat": current_lat,
                        "lng": current_lng, 
                        "prec": current_prec,
                        "tmax": current_tmax,
                        "tmin": current_tmin
                    }

                    data.append(new_row)
                else:

                    worst_prec = data[i]["prec"]
                    worst_tmax = data[i]["tmax"]
                    worst_tmin = data[i]["tmin"]

                    if current_prec > worst_prec:
                        data[i]["prec"] = current_prec
                    
                    if current_tmax > worst_tmax:
                        data[i]["tmax"] = current_tmax
                    
                    if current_tmin < worst_tmin:
                        data[i]["tmin"] = current_tmin

            first_epoch = False
            print(f'Year: {year}, Month: {month} finished')

    return data

def get_data_after_filter(data):

    filtered_data = []

    for point in data:

        new_row = {
            "lat": point["lat"],
            "lng": point["lng"],
            "pass_filter": False
        }

        filtered_data.append(new_row)

        if point["prec"] > 15:
            continue

        if point["tmax"] > 30:
            continue

        if point["tmin"] < 10:
            continue

        filtered_data[-1]["pass_filter"] = True
    
    return filtered_data

            


start_time = time.time()
data = generate_json()

filename = "worst_data.json"

print(f'Writing data to {filename}')
with open(filename, 'w') as file:
    json.dump(data, file, indent=4)

filtered_data = get_data_after_filter(data)

filename = "filtered_data.json"

print(f'Writing data to {filename}')
with open(filename, 'w') as file:
    json.dump(filtered_data, file, indent=4)

end_time = time.time()
print(f'Finished in {end_time - start_time} seconds')
