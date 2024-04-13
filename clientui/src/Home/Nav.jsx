import React from 'react'

const Nav = () => {
  return (
    <header className='bg-[#0D1F23]  font-bold  w-full  min-h-[10px] text-white   mx-10  relative top-0  ' >
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl  flex items-center justify-center font-poppins capitalized'>School <span className='text-[#DBFDC8]'>Mate</span></h2>

        <div className='flex   max-lg:hidden'>
          <button className='px-10 py-1'>
            <a  className='text-[20px]' href=''>Register</a>
          </button>
          <button className='px-10 py-1 ml-6  border-2 border-[#DBFDC8]'>
            <a  className='text-[20px]' href=''>Login</a>
          </button>
        </div>
      </div>
      


      
    </header>
  )
}

export default Nav
