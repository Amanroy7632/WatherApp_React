import React from 'react'
import './loader.css'
function Loader() {
  return (
    <div className=' loader-container w-full  flex justify-center items-center py-60 dark:bg-black overflow-hidden'>
      <span className="loader dark:text-white"></span>
    </div>
  )
}

export default Loader
