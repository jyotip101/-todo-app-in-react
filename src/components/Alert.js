import React, { useEffect } from 'react'

const Alert = ({ color, text, showAlert, todos }) => {
  useEffect(() => {
    const hideAlert = setTimeout(() => {
      showAlert()
    }, 3000)
    return () => clearTimeout(hideAlert)
  }, [todos])
  return (
    <>
      <p className={` text-[${color}] text-center `}>{text}</p>
    </>
  )
}

export default Alert
