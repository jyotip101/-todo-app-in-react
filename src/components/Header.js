import React from 'react'

const Header = () => {
  return (
    <>
      <header className=' m-5 max-w-3xl mb-0 mx-auto h-full'>
        <h1 className='text-3xl text-center  text-[#000] font-bold mb-8'>
          #todo
        </h1>

        <ul className='flex justify-around m-4 border-b-2 border-[#bf161c4d] text-[#00] font-[500]  '>
          <li className='cursor-pointer hover:text-[#bf161d] focus:text-[#bf161d]  transition capitalize px-2 border-b-4 border-[#bf161d] '>
            All
          </li>
          <li className='cursor-pointer hover:text-[#bf161d] transition capitalize  '>
            Active
          </li>
          <li className='cursor-pointer hover:text-[#bf161d] transition capitalize  '>
            Completed
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
