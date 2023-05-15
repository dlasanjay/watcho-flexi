import React from 'react'
import './banner.css'

const index = () => {
  return (
    <div className='banner'>
      <div className='banner-left'>
        <div className='heading-block'>
          <h1 className='banner-head'>Jaisa Chaho, Waisa Plan Banao</h1>
          <h3 className='banner-subhead'>Choose your own OTT's with Flexi Plan</h3>
        </div>
        <div className='img-block'>
          <img src={require('../../assets/images/banner/flexi-banner.png')} />
        </div>
        <div className='banner-desc'>
          One Subscription. Many OTT's. Multiple Devices.
        </div>
        <div className='banner-watcho-devices'>
            <div className=''>
                <p>Watch on <br />any device</p>
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
      
    </div>
  )
}

export default index
