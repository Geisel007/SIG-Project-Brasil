// React
import React, { forwardRef } from 'react'

/**
 * A reusable component for displaying views with custom styles.
 * @param {Object} props.className - An object containing CSS styles for the view.
 * @param {React.ReactNode} props.children - The child elements to be displayed inside the view.
 * @returns {JSX.Element} - A React JSX element representing the view.
 */
const View = forwardRef((props, ref) => {

  return (
    <div 
      ref={ref}
      {...props}
    />
  )
})

export default View
