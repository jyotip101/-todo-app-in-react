import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import FormInput from './components/FormInput'
import Alert from './components/Alert'
import Lists from './components/Lists'

// main - #bf161d
//  bg - #ffffff
// font- #ffffff

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}

const App = () => {
  const [alert, setAlert] = useState({
    show: false,
    color: '',
    bgColor: '',
    text: '',
  })
  const [todos, setTodos] = useState(getLocalStorage())
  const [text, setText] = useState('')
  const [filterTodos, setFilterTodos] = useState([])
  const [isChecked, setIsChecked] = useState(false)

  const handleAddButton = (e) => {
    e.preventDefault()

    if (text) {
      // add new item in list
      const newTodos = {
        text: text,
        compleated: isChecked,
        id: new Date().getTime().toString(),
      }
      setTodos([...todos, newTodos])
      showAlert(true, 'text-[#008000d0]', 'bg-[#00800028]', 'one item added')
      setText('')
    } else {
      // empty input
      showAlert(
        true,
        'text-[#ff0000d0]',
        'bg-[#ff000028]',
        'Please Enter Value'
      )
    }
  }

  // show alert
  const showAlert = (show = false, color = '', bgColor = '', text = '') => {
    setAlert({ show, color, bgColor, text })
  }
  // set compleated todos
  const compleateTodo = (id) => {
    const newCompl = todos.map((item) => {
      if (item.id === id) {
        return { ...item, compleated: !item.compleated }
      }
      return item
    })
    setTodos(newCompl)
  }

  const selectTodosStatus = (selectStatus) => {
    let border
    if (selectStatus === 'active') {
      const curTodosStatus = todos.filter((item) => item.compleated === false)
      border = 'active'
      setFilterTodos(curTodosStatus)
      return
    }
    if (selectStatus === 'completed') {
      const curTodosStatus = todos.filter((item) => item.compleated === true)
      border = 'completed'
      setFilterTodos(curTodosStatus)
      return
    }
    border = 'all'
    setFilterTodos(todos)
  }
  //  delete item of todo
  const removeTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id))
    showAlert(true, 'text-[#ff0000d0]', 'bg-[#ff000028]', 'one item is deleted')
  }
  // clear all items of list
  const deleteAllTodos = () => {
    setTodos([])
    showAlert(
      true,
      'text-[#ff0000d0]',
      'bg-[#ff000028]',
      'all items is deleted'
    )
  }
  // add todos in local storage
  useEffect(() => {
    selectTodosStatus()
    localStorage.setItem('list', JSON.stringify(todos))
  }, [todos])
  return (
    <>
      <div className='bg-[#fff] m-auto max-w-xl w-full h-full'>
        <Header selectTodosStatus={selectTodosStatus} />

        <div
          className={`w-[50%] mx-auto ${alert.bgColor} rounded-sm h-[1.5rem]  `}
        >
          {alert.show && <Alert {...alert} showAlert={showAlert} />}
        </div>

        <FormInput
          text={text}
          setText={setText}
          handleAddButton={handleAddButton}
        />

        {todos.length > 0 && (
          <>
            {filterTodos.map((item) => {
              return (
                <Lists
                  key={item.id}
                  item={item}
                  compleateTodo={compleateTodo}
                  removeTodo={removeTodo}
                />
              )
            })}
            <div className=' w-full flex justify-end   '>
              <button
                className='bg-[#bf161d] flex text-[#fff] lowercase  px-4 py-[0.5rem] rounded-md border-[#bf161c4d] mr-4 mt-4 text-[#00] font-[500] '
                onClick={deleteAllTodos}
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
