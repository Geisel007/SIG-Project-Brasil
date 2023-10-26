// React
import React from 'react'

/**
A reusable component for displaying labels with internationalization support.
@param {Object} props - The props object for the Label component.
@param {string} props.className - The CSS class name for the label element.
@param {string} props.children - The text content of the label.
@returns {JSX.Element} - A React JSX element representing the label.
*/
const Label = (props) => {

  return (
    <label 
      {...props}
    />
  )
}

export default Label
