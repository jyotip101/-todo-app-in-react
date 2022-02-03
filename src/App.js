import React, { useState } from 'react'
import Header from './components/Header'
import FormInput from './components/FormInput'
import Alert from './components/Alert'
import Lists from './components/Lists'

// main - #bf161d
//  bg - #ffffff
// font- #ffffff

const App = () => {
  const [alert, setAlert] = useState({
    show: false,
    color: '',
    bgColor: '',
    text: '',
  })
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')
  const [filterTodos, setFilterTodos] = useState([])

  const handleAddButton = (e) => {
    e.preventDefault()
    if (text) {
      const newTodos = {
        text: text,
        id: Math.random() * 100,
        compleated: false,
      }

      setTodos([...todos, newTodos])
      showAlert(true, '#f7040d', '#fff', 'one item added')
      setText('')
    } else {
      showAlert(true, '#f7040d', '#fff', 'empty ip')
    }
  }

  const showAlert = (show = false, color = '', bgColor = '', text = '') => {
    setAlert({ show, color, bgColor, text })
  }

  const filterHandler = (status) => {
    if (status === 'compleated') {
      setFilterTodos(todos.filter((item) => todos.compleated === true))
    }
    if (status === 'uncompleated') {
      setFilterTodos(todos.filter((item) => todos.compleated === false))
    }
    if (status === 'all') {
      setFilterTodos(todos)
    }
  }
  const compleatedHandler = (id) => {
    const newCompleated = todos.map((item) => {
      if (item.id === id) {
        return { ...item, compleated: !item.compleated }
      }
    })
    setTodos(newCompleated)
  }
  const removeTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id))
    showAlert(true, '#f7040d', '#fff', 'one item deleted')
  }
  const deleteAll = () => {
    setTodos([])
    showAlert(true, '#f7040d', '#fff', 'all items deleted')
  }
  return (
    <>
      <div className='bg-[#fff] m-auto max-w-xl w-full h-full'>
        <Header />
        <div className={`w-[60%] mx-auto h-4 bg-[${alert.bgColor}] `}>
          {alert.show && <Alert {...alert} showAlert={showAlert} />}
        </div>
        <FormInput
          text={text}
          setText={setText}
          handleAddButton={handleAddButton}
        />

        {todos.length > 0 && (
          <Lists
            todos={todos}
            removeTodo={removeTodo}
            filterHandler={filterHandler}
            compleatedHandler={compleatedHandler}
          />
        )}

        <div className=' w-full flex justify-end   '>
          <button
            className='bg-[#bf161d] flex text-[#fff] lowercase  px-4 py-[0.5rem] rounded-md border-[#bf161c4d] mr-4 mt-4 text-[#00] font-[500] '
            onClick={deleteAll}
          >
            <span className='material-icons'>delete</span>
            delete all
          </button>
        </div>
      </div>

      {/* <h1 className=' absolute top-[30rem] '>hello</h1> */}
    </>
  )
}

export default App
