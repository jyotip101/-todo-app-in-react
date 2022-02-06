import React, { useEffect } from 'react'

const Alert = ({ color, bgColor, text, showAlert, todos }) => {
  useEffect(() => {
    const hideAlert = setTimeout(() => {
      showAlert()
    }, 3000)
    return () => clearTimeout(hideAlert)
  }, [todos])
  return (
    <>
      <div className={`w-[60%] mx-auto ${bgColor} rounded-sm h-fit`}>
        <p className={` ${color} text-center `}>{text}</p>
      </div>
    </>
  )
}

export default Alert
