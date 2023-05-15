import React from 'react'
import './header.css'

const index = () => {
  return (
    <header>
        <div className='logo'>
            <img src={require('../../assets/images/watcho.png')} alt='Watcho' />
        </div>
    </header>
  )
}

export default index
