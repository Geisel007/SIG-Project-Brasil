// React
import React, { useEffect, useState } from 'react'
import { Img } from 'react-image'
// Components
import View from '../Wrappers/View/View'
import SelectBox from '../SelectBox/SelectBox'
// Constants
import { Constants } from '../../constants/Constants'

// Styles
import './Viewer.styles.css'

/**
Viewer component that renders the React Router, is the root component of the application,
@returns {JS.Element} The JS code that represents the component.
*/
const Viewer = ({
  
}) => {

  const [selectedTypeImage, setSelectedTypeImage] = useState(Constants.typeImages[0].value)
  const [selectedMonths, setSelectedMonths] = useState(Constants.months[0].value)
  const [selectedYear, setSelectedYear] = useState(Constants.year[0].value)
  const [pathImg, setPathImg] = useState('/PNG/prec/prec_2020-01.png')

  const handleSelectTypeImageChange = (event) => {
    setSelectedTypeImage(event.target.value)
  }

  const handleSelectMonthsChange = (event) => {
    setSelectedMonths(event.target.value)
  }

  const handleSelectYear = (event) => {
    setSelectedYear(event.target.value)
  }

  const generatePath = (type, month, year) => {
    return '/PNG/' + type + '/' + type + '_' + year + '-' + month + '.png'
  }

  useEffect(() => {
    console.log(selectedTypeImage)
    console.log(selectedMonths)
    console.log(selectedYear)
    setPathImg(generatePath(selectedTypeImage, selectedMonths, selectedYear))
  }, [selectedTypeImage, selectedMonths, selectedYear])

  return (
  <View
    className='viewer'
  >
      <View
        className='options'
      >
        <SelectBox
          options={Constants.typeImages}
          selectedValue={selectedTypeImage}
          onChange={handleSelectTypeImageChange}
        />
        <SelectBox
          options={Constants.months}
          selectedValue={selectedMonths}
          onChange={handleSelectMonthsChange}
        />
        <SelectBox
          options={Constants.year}
          selectedValue={selectedYear}
          onChange={handleSelectYear}
        />
      </View>
      <View
        className='raster-image-container'
      >
        <Img
          src={pathImg}
          alt="Mi Imagen"
          loader={<div>Cargando...</div>}
          unloader={<div>No se pudo cargar la imagen</div>} 
          className='raster-image'
        />
      </View>
   </View>
  )
}

export default Viewer
