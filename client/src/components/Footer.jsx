import React from 'react'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
  return (
    <div className='d-flex justify-content-center align-items-center primary-color screen-sizing text-light p-4'>
      <div className="d-flex justify-content-center align-items-center">
        {/* fix mt-3 to center p elements */}
        <p className='mt-3 fst-italic'> All Rights Reserved  @ {year} </p>
      </div>
    </div>
  )
}

export default Footer;