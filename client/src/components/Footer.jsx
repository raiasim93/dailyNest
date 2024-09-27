import React from 'react'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
  return (
    <div className='d-flex justify-content-center align-items-center screen-sizing text-white p-4'>
      <p className='fst-italic'> All Rights Reserved  @ {year} </p>
    </div>
  )
}

export default Footer;