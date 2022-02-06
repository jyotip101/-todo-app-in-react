import React, { useEffect, useState } from 'react'
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
        compleated: false,
        id: new Date().getTime().toString(),
      }
      setTodos([...todos, newTodos])
      showAlert(true, 'text-[#008000d0]', 'bg-[#00800028]', 'one item added')
      setText('')
    } else {
      showAlert(
        true,
        'text-[#ff0000d0]',
        'bg-[#ff000028]',
        'Please Enter Value'
      )
    }
  }

  const showAlert = (show = false, color = '', bgColor = '', text = '') => {
    setAlert({ show, color, bgColor, text })
  }

  const compleateTodo = (id) => {
    const newCompl = todos.find((item) => item.id === id)

    console.log(newCompl)
    if (newCompl.compleated) {
      return (newCompl.compleated = false)
    }
    newCompl.compleated = true
  }

  const selectTodosStatus = (selectStatus) => {
    if (selectStatus === 'all') {
      setFilterTodos(todos)
      return
    }

    if (selectStatus === 'active') {
      const curTodosStatus = todos.filter((item) => item.compleated === false)
      setFilterTodos(curTodosStatus)
      return
    }
    if (selectStatus === 'completed') {
      const curTodosStatus = todos.filter((item) => item.compleated === true)
      setFilterTodos(curTodosStatus)
      return
    }
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id))
    showAlert(true, 'text-[#ff0000d0]', 'bg-[#ff000028]', 'one item is deleted')
  }

  const deleteAll = () => {
    setTodos([])
    showAlert(
      true,
      'text-[#ff0000d0]',
      'bg-[#ff000028]',
      'all items is deleted'
    )
  }
  return (
    <>
      <div className='bg-[#fff] m-auto max-w-xl w-full h-full'>
        <Header selectTodosStatus={selectTodosStatus} />

        {alert.show && <Alert {...alert} showAlert={showAlert} />}
        <FormInput
          text={text}
          setText={setText}
          handleAddButton={handleAddButton}
        />

        {todos.length > 0 && (
          <>
            <Lists
              todos={todos}
              setComplate={compleateTodo}
              removeTodo={removeTodo}
            />

            <div className=' w-full flex justify-end   '>
              <button
                className='bg-[#bf161d] flex text-[#fff] lowercase  px-4 py-[0.5rem] rounded-md border-[#bf161c4d] mr-4 mt-4 text-[#00] font-[500] '
                onClick={deleteAll}
              >
                <span className='material-icons'>delete</span>
                delete all
              </button>
            </div>
          </>
        )}
      </div>

      {/* <h1 className=' absolute top-[30rem] '>hello</h1> */}
    </>
  )
}

export default App
