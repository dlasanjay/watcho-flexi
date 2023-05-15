import React, { useState,useRef } from 'react'
import './plans.css'
import { calculatePercentage, compareData, filterPlans, removeFromString } from '../../api/Functions';

const Index = ({expanPlan,handleClick, showSubsPopup, compareList, setCompareList, plans}) => {

    const annulaRef = useRef(null);
    const monthlyRef = useRef(null);

    
    const swtchPlans = (e, tab) => {
        if (tab === "Annual") {
            annulaRef.current.classList.add("active");
            monthlyRef.current.classList.remove("active");
            var filterData = filterPlans(plans.Result, 'Annual');
            setCompareList(compareData(filterData));
        }
        if (tab === "Monthly") {
            annulaRef.current.classList.remove("active");
            monthlyRef.current.classList.add("active");
            var filterData = filterPlans(plans.Result, 'Monthly');
            setCompareList(compareData(filterData));
        }
      };
  
  return (
    <div className={expanPlan?'plansWap show':'plansWap hide'} >
      <div className='headRow'>
        <div className='rowLeft'>
            <span className=''>Our<br /> Plans</span>
        </div>
        <div className='rowRight'>
        {
                compareList.planNames?.map((key) => {

                    return (<div className='planClms'>{removeFromString(['WATCHO'], key)}</div>)
                })
            }
           
        </div>
      </div>
     
      {
        compareList.planKeys?.map((data) => {
          
            return (
                <div className='contRow'>
                <div className='rowLeft'>
                    <img className='ottLogo' src={compareList.ottList[data].app.AppIconUrl} alt={data} />
                </div>
                <div className='rowRight'>
                {
                    compareList.planNames?.map((key) => {
                   
                        return ( <div className='checkmark'>
                        
                            {compareList.ottList[data].compare[key].SubscriptionPlanID ? <span><i className='fa fa-check'></i></span>  : ''}
                            
                                           
                    </div>)
                    })
                }
                
                            
                </div>
              </div>
            )
        })
    }
      
      


      <div className='contRow dashed'>
        <div className='rowLeft'>
            <span className=''>Apps Worth</span>
        </div>
        <div className='rowRight'>   
        {
                compareList.planNames?.map((key) => {

                    return (<div className='realPrice'>
                            <span>&#8377; {compareList.planPrices[key]?.SubscriptionDisplayPriceWithTax}</span>
                            </div>
                            )
                })
            }         
          
           
        </div>
      </div>
      <div className='contRow dashed'>
        <div className='rowLeft switch-tab'>
            <span className=''>You Pay</span>
            <div className='stabs'>
                <button value='Annual' ref={annulaRef} className='switch-btn active' onClick={(e)=>swtchPlans(e,'Annual')}>Yearly</button>
                <button value='Monthly' ref={monthlyRef} className='switch-btn' onClick={(e)=>swtchPlans(e,'Monthly')}>Monthly</button>
            </div>
        </div>
        <div className='rowRight'> 
        {
                compareList.planNames?.map((key) => {

                    return (<div className='reducedPrice'>
                    <span>&#8377; {compareList.planPrices[key]?.SubscriptionPriceWithTax}</span>
                    <i className='info'onClick={() => handleClick(compareList.planPrices[key])} >i</i>
                   </div>
                            )
                })
            }            
           
           
        </div>
      </div>

      <div className='contRow dashed border-0'>
        <div className='rowLeft'>
            <span className=''>You Save</span>
        </div>
        <div className='rowRight prcent'> 
        {
                compareList.planNames?.map((key) => {

                    return (
                        <div>{calculatePercentage(compareList.planPrices[key]?.SubscriptionDisplayPriceWithTax, compareList.planPrices[key]?.SubscriptionPriceWithTax)}%</div>
                       
                    )
                })
            } 
         
        </div>
      </div>
      <div className='contRow dashed border-0'>
        <div className='rowLeft'>
            
        </div>
        <div className='rowRight'>  
        {
                compareList.planNames?.map((key) => {

                    return (
                        <button className='site-btn-default' onClick={() => showSubsPopup(compareList.planPrices[key])}>Subscribe</button>
                       
                    )
                })
            }           
           
        </div>
      </div>

    </div>
  )
}

export default Index
