import React from 'react'

import image1 from './assets/chuks.jpg'

import facebook from './assets/facebook.svg'
import instagram from './assets/instagram.svg'
import twitter from './assets/twitter.svg'
import TypeWriterEffect from 'react-typewriter-effect';


const Developers = () => {
  return (
    <>
    <div className='text-center ml-[12rem] '>
   <TypeWriterEffect
   textStyle={{
    color: '#DBFDC8',
    fontWeight: 500,
    fontSize: '3rem',
  }}

startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
           'Meet our Developers' ,
           'Ojieh chuks' ,
           'Anibet edet ' ,
           'Babaola Gideon',
          
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
        multiTextLoop={true}
      />
</div>


    <section className='flex flex-col  '>
        {/* <h1 className='text-center text-5xl'>Meet our developer</h1> */}



        <div className='mt-20'>
            <h1>Ojieh david chukwuyenum</h1>
            <img  src={image1} alt='chuks'
            className=' w-[15rem] rounded-md'
            
            />
            <div className='absolute top-[33rem] left-[27rem] right-0 flex flex-col justify-between space-y-6 '>
            <img className='w-[2rem] bg-[white] rounded-full p-2'   src={facebook} alt='facebook'/>
            <img  className='w-[2rem] bg-[white] rounded-full p-2' src={instagram} alt='instagram'/>
            <img className='w-[2rem] bg-[white] rounded-full p-2'  src={twitter} alt='twitter'/>
            </div>


        </div>


    </section>

      
    </>
  )
}

export default Developers
