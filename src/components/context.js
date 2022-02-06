import React, { useContext, useState } from 'react'

const AppContext = React.createContext()
export const AppProvider = ({ children }) => {
  const [alert, setAlert] = useState({
    show: false,
    color: '',
    bgColor: '',
    text: '',
  })
  const [todos, setTodos] = useState([])
  const [filterTodos, setfilterTodos] = useState([])

  const showAlert = (show = false, color = '', bgColor = '', text = '') => {
    setAlert({ show, color, bgColor, text })
  }

  return (
    <AppContext.Provider
      value={{
        alert,
        showAlert,
        todos,
        filterTodos,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
