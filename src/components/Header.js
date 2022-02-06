import React from 'react'

const Header = ({ selectTodosStatus }) => {
  return (
    <>
      <header className=' m-5 max-w-3xl mb-0 mx-auto h-full'>
        <h1 className='text-3xl text-center  text-[#000] font-bold mb-8'>
          #todo
        </h1>

        <ul className='flex justify-around m-4 mb-1 border-b-2 border-[#bf161c4d] text-[#00] font-[500]  '>
          <li className='cursor-pointer hover:text-[#bf161d] focus:text-[#bf161d]  transition capitalize px-2 border-b-4 border-[#bf161d] '>
            <button onClick={() => selectTodosStatus('all')}> All</button>
          </li>
          <li className='cursor-pointer hover:text-[#bf161d] transition capitalize  '>
            <button onClick={() => selectTodosStatus('active')}>Active</button>
          </li>
          <li className='cursor-pointer hover:text-[#bf161d] transition capitalize  '>
            <button onClick={() => selectTodosStatus('completed')}>
              Completed
            </button>
          </li>
        </ul>
        {/* Make a cake
        Do something
        Do coding challenges */}
      </header>
    </>
  )
}

export default Header
