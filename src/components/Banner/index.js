import React from 'react'
import './banner.css'

const index = () => {
  return (
    <div className='banner'>
      <div className='banner-left'>
        <h1 className='banner-head'>Streaming The Way You Like!</h1>
        <h3 className='banner-subhead'>One Subscription. Many OTT's. Multiple Devices.</h3>
        <div className='banner-watcho-devices'>
            <div className=''>
                <p>Watch on any device</p>
            </div>
            <ul className='list-devices'>
                <li>
                    <img src={require('../../assets/images/icons/tv.png')} alt="Tv" />
                    <div className='deviceName'>TV</div>
                </li>
                <li>
                    <img src={require('../../assets/images/icons/desktop.png')} alt="Tv" />
                    <div className='deviceName'>Desktop</div>
                </li>
                <li>
                    <img src={require('../../assets/images/icons/mobile.png')} alt="Tv" />
                    <div className='deviceName'>Mobile</div>
                </li>
                <li>
                    <img src={require('../../assets/images/icons/laptop.png')} alt="Tv" />
                    <div className='deviceName'>Laptop</div>
                </li>
                <li>
                    <img src={require('../../assets/images/icons/tablet.png')} alt="Tv" />
                    <div className='deviceName'>Tablet</div>
                </li>
            </ul>
        </div>
      </div>
      <div className='banner-right'>
        <img src={require('../../assets/images/banner/banner.png')} />
      </div>
    </div>
  )
}

export default index
