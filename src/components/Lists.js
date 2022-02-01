import React from 'react'

const Lists = ({ text, setCompleate, compleate }) => {
  return (
    <>
      <div className='flex justify-start mt-[2rem] m-4 items-center '>
        <input
          type='checkbox'
          name='checkbox'
          className='border-2 font-[500] mr-4 '
          onClick={() => setCompleate(!compleate)}
        />
        <label
          htmlFor='checkbox'
          className={`font-[500] ${
            compleate && 'line-through italic font-[400] '
          } text-[100%]`}
        >
          {text}
        </label>
      </div>
    </>
  )
}

export default Lists
