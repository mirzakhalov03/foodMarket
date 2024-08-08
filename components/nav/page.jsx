import React from 'react'

const Nav = () => {
  return (
    <div className='w-full h-[120px] p-5 flex items-center justify-between '>
        <div>
          <h1 className='flex text-2xl font-semibold'>Welcome, User <img src="/waving.svg" alt="" /></h1>
          <p className='text-sm text-[#676161]'>Discover whatever you need</p>
        </div>
        
        <input type="text" placeholder='Search' className='flex w-[300px] h-[40px] border bg-[#fff6] border-[#fff] rounded-2xl pl-5' />
    </div>
  )
}

export default Nav