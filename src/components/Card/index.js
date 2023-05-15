import React, { Fragment, useEffect, useState } from 'react'
import './card.css'
import { filterPlans, removeFromString } from '../../api/Functions'

const Index = ({ plan, handleClick, showSubsPopup, plans}) => {
  const [activePlan, setIsActiveplan] = useState('Annual')
  const [filterObj, setFilterObj] = useState(plan)




  const handleChange = (event, SubscriptionPlanName) => {
    const target = event.target;
    const value = target.value;
    setIsActiveplan(value)
    
    let temp = filterPlans(plans.Result, value, SubscriptionPlanName);
    setFilterObj(temp[0])
  }
  const addRequireClassName =(num)=> {
    if(num > 10) {
      return 'grater-10';
    }else if(num == 10) {
      return 'equal-10';
    }else if(num >8) {
      return 'equal-10';
    }else if(num >6) {
      return 'equal-8';
    }else {
      return 'equal-6';
    }
  }

  return (
    <div className={`subsCard ${(filterObj.SubscriptionPlanName).toLowerCase().includes('max') ?  'best-buy-subsCard' : ""}`} key={filterObj.SubscriptionPlanName}>
      {
        (filterObj.SubscriptionPlanName).toLowerCase().includes('max') ?
        <div className='bestBuy'>
        <div className="bestBuy-wrap">
          <img src={require("../../assets/images/best-buy.png")} alt="" />
          <span>Best Buy</span>
        </div>
    </div>
        : ''
      }
     
      <div className='cardHeader'>
        <h3 className='packageName'>
          Watcho
          <span>{removeFromString(['WATCHO'], filterObj.SubscriptionPlanName)}</span>
        </h3>
        <div className='packagePrice'>
          <div className='priceBox'>
            <div className='discounted'>&#8377; {filterObj.SubscriptionPriceWithTax}</div>
            <div className='actual'>&#8377; {filterObj.SubscriptionDisplayPriceWithTax}</div>
          </div>
          <div className='subsType'>
            <div className='radioBox'>
              <input id={filterObj.SubscriptionPlanID + "year-option"} value="Annual" defaultChecked={activePlan == 'Annual' ? true : false} name={filterObj.SubscriptionPlanID + "package-name"} type="radio" onChange={(e) => handleChange(e, filterObj.SubscriptionPlanName)} />
              <label htmlFor={filterObj.SubscriptionPlanID + "year-option"}>Yearly</label>
              <div className="check"></div>
            </div>
            <div className='radioBox'>
              <input id={filterObj.SubscriptionPlanID + "month-option"} value="Monthly" defaultChecked={activePlan == 'Monthly' ? true : false} name={filterObj.SubscriptionPlanID + "package-name"} type="radio" onChange={(e) => handleChange(e, filterObj.SubscriptionPlanName)} />
              <label htmlFor={filterObj.SubscriptionPlanID + "month-option"}>Monthly</label>
              <div className="check"></div>
            </div>
          </div>
        </div>
      </div>
      <div className='cardBody'>
        {
          filterObj.SubscriptionApps ?
            <>

              <h4>{filterObj.SubscriptionPlanDescription}</h4>
              <p>Access across TV, Laptop, Mobile & Tablets at a time</p>
              <ul className={`platforms-list ${filterObj.SubscriptionApps && addRequireClassName((filterObj.SubscriptionApps).length)}`}>
                {
                  filterObj.SubscriptionApps.map((row) => {
                    return (<li>
                      <img src={row.AppIconUrl} alt={row.AppName} /></li>
                    )
                  })
                }

              </ul>
            </>
            : ""
        }
        <div className='saveUp'>You save upto &#8377; {parseFloat(filterObj.SubscriptionDisplayPriceWithTax) - parseFloat(filterObj.SubscriptionPriceWithTax)}</div>
        <button type='button' className='btn-subs' onClick={() => showSubsPopup(filterObj)}>Subscribe Now</button>
        <button onClick={() => handleClick(plan)} className='btn-readmore'>Know more</button>
      </div>
    </div>
  )
}

export default Index
