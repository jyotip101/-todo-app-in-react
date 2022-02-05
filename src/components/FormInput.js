import React from 'react'

const FormInput = ({ handleAddButton, text, setText }) => {
  return (
    <>
      <form
        onSubmit={handleAddButton}
        className='mb-[2rem] flex justify-center m-4'
      >
        <input
          type='text'
          name='text'
          placeholder='add details'
          id='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          className='border-2  px-4 py-[0.5rem] max-w-[400px] w-full rounded-md border-[#bf161c4d] text-[#00] font-[500] outline-none mr-4 '
        />
        <button className='bg-[#bf161d] text-[#fff] capitalize  px-4 py-[0.5rem] rounded-md border-[#bf161c4d] text-[#00] font-[500] '>
          add
        </button>
      </form>
    </>
  )
}

export default FormInput
