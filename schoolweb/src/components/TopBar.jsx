import React from 'react'

const TopBar = () => {
  return (
    <>
      <div className='bg-blue-500 text-white p-4 flex justify-between items-center'>
        <div>
            <h1 className='text-lg font-bold'>my school logo</h1>
        </div>
        <div className='flex gap-4'>
            <ul className=''>
                <a href=""><li className='inline mx-4'>School Portal</li></a>
                <a href=""><li className='inline mx-4'>About Us</li></a>
                <a href=""><li className='inline mx-4'>Academics</li></a>
                <a href=""><li className='inline mx-4'>Facilities</li></a>
                <a href=""><li className='inline mx-4'>Admissions</li></a>
                <a href=""><li className='inline mx-4'>Contact</li></a>
            </ul>
        </div>
      </div>
    </>
  )
}

export default TopBar
