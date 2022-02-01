import React from 'react'
import { useState } from 'react/cjs/react.development'
import Lists from './Lists'
const FormInput = () => {
  const [todo, setTodo] = useState()
  const [text, setText] = useState('')

  return (
    <>
      <form action='' className='flex justify-center m-4 '>
        {/* <div className=''> */}
        <input
          type='text'
          name='text'
          placeholder='add details'
          id='text'
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
      <Lists />
    </>
  )
}

export default FormInput
