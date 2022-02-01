import React from 'react'
import { useState } from 'react/cjs/react.development'
import Lists from './Lists'
const FormInput = () => {
  const [todo, setTodo] = useState([])
  const [text, setText] = useState('')
  const [compleate, setCompleate] = useState(false)

  const handleAddButton = (e) => {
    e.preventDefault()
    if (text) {
      const newTodo = { text: text }

      setTodo([...todo, newTodo])
    } else {
      console.log('empty ip')
    }

    setText('')
  }

  return (
    <>
      <form onSubmit={handleAddButton} className='flex justify-center m-4 '>
        {/* <div className=''> */}
        <input
          type='text'
          name='text'
          placeholder='add details'
          id='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          className='border-2  px-4 py-[0.5rem] max-w-[400px] w-full
            rounded-md border-[#bf161c4d] text-[#00] font-[500] outline-none mr-4 '
        />
        {/* </div> */}
        <button
          className='bg-[#bf161d] text-[#fff] capitalize  px-4 py-[0.5rem]
            rounded-md border-[#bf161c4d] text-[#00] font-[500] '
        >
          add
        </button>
      </form>
      {todo.map((item, index) => {
        const { text } = item
        return (
          <Lists
            key={index}
            text={text}
            compleate={compleate}
            setCompleate={setCompleate}
          />
        )
      })}
    </>
  )
}

export default FormInput
