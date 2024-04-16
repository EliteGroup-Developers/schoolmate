import React from 'react'
import {Link} from 'react-router-dom'

const DashBoardNav = () => {
  return (
    <>
            <header className='bg-[#0D1F23]  font-bold  w-full  min-w-[10px] text-white   mx-0     mt-0 absolute top-0' >
      <div className='flex items-center justify-between'>
       <Link to='/home' ><h2 className='text-2xl  flex items-center justify-center font-poppins capitalized'>School <span className='text-[#DBFDC8]'>Mate</span></h2></Link> 

        <div className='flex   max-lg:hidden'>
          <button className='px-10 py-1 ml-6  border-2 border-[#363736]'>
            <a  className='text-[20px]' href=''>View timetable</a>

            
          </button>
        </div>
      </div>
      


      
    </header>

      
    </>
  )
}

export default DashBoardNav
