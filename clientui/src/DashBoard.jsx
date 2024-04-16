import React from 'react'

import DashBoardNav from './DashBoardNav'

const DashBoard = () => {
  return (

    <section className='  min-w-full'>
    <DashBoardNav/>


    <div className='-mt-[10rem]  flex flex-col justify-center items-center h-4 '>
      <h1 className='text-center mt-0  text-3xl'>Welcome username</h1>
      
    </div>
    
    </section>
  )
}

export default DashBoard
