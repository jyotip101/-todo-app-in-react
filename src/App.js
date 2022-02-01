import React from 'react'
import Header from './components/Header'
import FormInput from './components/FormInput'
// main - #bf161d
//  bg - #ffffff
// font- #000000

const App = () => {
  return (
    <>
      <div className='bg-[#fff] m-auto max-w-xl w-full h-full'>
        <Header />
        <FormInput />
        {/* <h1 className=' absolute top-[30rem] '>hello</h1> */}
      </div>
    </>
  )
}

export default App
