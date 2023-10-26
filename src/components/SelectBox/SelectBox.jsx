import React from 'react';
// Styles
import './SelectBox.styles.css'

const SelectBox = ({ options, selectedValue, onChange }) => {
  return (
    <select
      value={selectedValue}
      onChange={onChange}
      className={'custom-select-box'}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value} className={'option'}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
