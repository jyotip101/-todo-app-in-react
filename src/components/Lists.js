import React from 'react'

const Lists = ({ todos, filterTodos, removeTodo, setComplate }) => {
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
                onChange={() => setComplate(id)}
              />
              <p
                htmlFor='checkbox'
                className={`  text-[#000] ${
                  compleated && 'text-[400] italic line-through '
                } text-[100%] 'font-[500]`}
              >
                {text}
              </p>
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
