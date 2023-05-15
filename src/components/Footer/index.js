import React from 'react'
import './footer.css'

const index = () => {
  return (
    <footer>
      <div className='footeleft'>
          <div className='footxt'>TV app</div>
          <ul className='foot-list'>
            <li><a href='#'><img src={require('../../assets/images/logos/android_TV.png')} alt=''/></a></li>
            <li><a href='#'><img src={require('../../assets/images/logos/amazon.png')} alt=''/></a></li>
            <li><a href='#'><img src={require('../../assets/images/logos/apple_tv.png')}  alt=''/></a></li>
          </ul>
      </div>
      <div className='footeright'>
        <div className='footxt'>Mobile app</div>
        <ul className='foot-list'>
            <li><a href='#'><img src={require('../../assets/images/logos/apple_ios.png')}  alt=''/></a></li>
            <li><a href='#'><img src={require('../../assets/images/logos/android_logo.png')} alt=''/></a></li>
          </ul>
      </div>
    </footer>
  )
}

export default index
