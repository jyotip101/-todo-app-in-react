import React from 'react'

const Lists = ({ todos, removeTodo, compleatedHandler, filterHandler }) => {
  console.log(todos)
  return (
    <>
      {todos.map((item) => {
        const { id, text, compleated } = item
        return (
          <div
            key={id}
            className='flex justify-between max-w-4xl  m-4 items-center '
          >
            <div className='flex items-center '>
              <input
                type='checkbox'
                name='checkbox'
                className='border-2  checked:border-red-500 bg-[#fff] font-[500] mr-4 '
                onClick={() => compleatedHandler(id)}
              />
              <label
                htmlFor='checkbox'
                className={`font-[500] ${
                  compleated && 'text-[400] italic line-through '
                } text-[100%]`}
              >
                {text}
              </label>
            </div>

            <button className=' mr-4' onClick={() => removeTodo(id)}>
              <span className='material-icons'>delete</span>
            </button>
          </div>
        )
      })}
    </>
  )
}

export default Lists
