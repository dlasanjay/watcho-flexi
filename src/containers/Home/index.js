import React, { Fragment,useState,useRef, useEffect, useContext } from 'react'
import './home.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import Plans from '../../components/Plans'
import Popups from '../../components/Popups'
import Accordion from '../../components/Accordion'
import Modal from 'react-modal'
import { questionsAnswers } from '../../data/faq'
import axios from 'axios'
import { deryptData, encryptData, getPlanList } from '../../api/Activity'
import { apiData } from '../../data/data'
import { compareData, filterPlans, maxPlan } from '../../api/Functions'
import globalContext from '../../context/GlobalContext'
Modal.setAppElement('#root');
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '31.77083vw',
    borderRadius:'1vw'
  },
};

const Index = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [expanPlan,setIsExpan] = useState(false)
  const [showPopup, setIsShow] = useState(false)
  const[plans,setPlans]=useState([])
  const[planList,setPlanList]=useState([])
  const [popupPlan, setPopupPlan] = useState({})
  const [compareList, setCompareList] = useState({"ottList" : [], "planNames" : [], "planPrices" : [], "planKeys" : []})
  // const [selectedPlan, setSelectedPlan] = useState({})
  const[maxPlanList,setMaxPlanList]=useState([])

  const plansRef = useRef(null)
   const checkout = useContext(globalContext)

  useEffect(() => {
    
    fetchPlanList()

  }, []);

  const fetchPlanList = async () => {
    
    try {
      console.log('data', apiData.Result)
      
      var filterData = filterPlans(apiData.Result, 'Annual');
      var max_filterData = maxPlan(filterData, 'Annual');

      setMaxPlanList(max_filterData)
      setPlanList(filterData);
      setPlans(apiData)
      setCompareList(compareData (filterData, max_filterData));

    } catch (e) {
      console.error(e);
    }
   

  }
  
  const scrollTo = () => plansRef.current.scrollIntoView() 
  const openModal=(plan)=> {
    setIsOpen(true);
    setPopupPlan(plan)

  }
  const afterOpenModal=()=> {
    //
  }
  const closeModal=()=> {
    setIsOpen(false);
  }
  const toggleExpand=()=> {
    if(expanPlan) {
      setIsExpan(false)
    }else{
      setIsExpan(true)
    }
  }
  const showSubsPopup = (plan)=> {
    setIsShow(true)
    checkout.setCheckoutPlan(plan)
    // setSelectedPlan(plan)
    
  }
  const closePopup =()=> {
    setIsShow(false)
  }


  return (
    <Fragment>
      <Header />
      <Banner />
      <div className='wrapper'>
        <div className='cardWrapper' ref={plansRef}>
        {
             maxPlanList.map((data)=>{  
              return (<Card plan={data} handleClick={openModal} showSubsPopup={showSubsPopup} plans={plans} />)
              // return (<Card plan={data} setPlanList={setPlanList} handleClick={openModal}/>);  
          
          }) 
        }
        {
             planList.map((data)=>{  
              if(!(data.SubscriptionPlanName).toLowerCase().includes('watcho max')) {

                return (<Card plan={data} handleClick={openModal} showSubsPopup={showSubsPopup} plans={plans} />)
              }
              // return (<Card plan={data} setPlanList={setPlanList} handleClick={openModal}/>);  
          
          }) 
        }
         
        </div>
        <section className='subsSteps'>
          <h2 className='sub-heading'>How to Buy Flexi Plans Subscription</h2>
          <div className='stepWrap'>
          <div className='setpBox'>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
          </div>
          <div className='setpBoxTet'>
            <span>Add your favourite OTT's</span>
            <span>Select a plan</span>
            <span>Verify your number</span>
            <span>Make payment</span>
          </div>
          </div>
          <button className='subsplan-btn'  onClick={scrollTo}>Subscribe A Plan</button>
        </section>
        {/* <section className='compareSec'>
          <h3 className='expand-txt'>
            Need Help!  
            <button className='expand-btn' onClick={toggleExpand}>Compare & Make A Choice <i className="fa fa-angle-down"></i></button>
          </h3>
          <div className='plansCmpr'>
            <Plans expanPlan={expanPlan} handleClick={openModal} showSubsPopup={showSubsPopup} compareList={compareList} setCompareList={setCompareList} plans={plans}/>
          </div>
        </section> */}
        <section className='faqsSec'>
          <h2 className='sub-heading'>FAQ's</h2>
          <Accordion questionsAnswers={questionsAnswers} />          
        </section>
        <div className='scrollto'>
          <button onClick={scrollTo}>Back to plans</button>
        </div>
      </div>      
      <Footer />

      <Popups showPopup={showPopup} closePopup={closePopup} />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} className='btn-close'><img src={require('../../assets/images/close.png')} alt='close'/></button>
        <div className='modal-content'>
          
          <h2 className='modal-heading'>Select Apps</h2>
          <p className='sub-desc'>Select minimum of 5 Apps or maximum of 8 Apps</p>
          
        <div className='apps-block'>
          <p>Popular Apps</p>
          <ul className='ott-list'>        
              <li>
                <div className='platformname'>Sony LIV</div>
                <img src={require('../../assets/images/logos/logos-2.png')} alt='' />
                <div className='platformprice'><input type='checkbox' /></div>
              </li>
              <li>
                <div className='platformname'>Sony LIV</div>
                <img src={require('../../assets/images/logos/logos-2.png')} alt='' />
                <div className='platformprice'><input type='checkbox' /></div>
              </li> 
              <li>
                <div className='platformname'>Sony LIV</div>
                <img src={require('../../assets/images/logos/logos-2.png')} alt='' />
                <div className='platformprice'><input type='checkbox' /></div>
              </li> 
              <li>
                <div className='platformname'>Sony LIV</div>
                <img src={require('../../assets/images/logos/logos-2.png')} alt='' />
                <div className='platformprice'><input type='checkbox' /></div>
              </li>      
          </ul>

          <p>Regional Apps</p>
          <ul className='ott-list'>        
              <li>
                <div className='platformname'>Sony LIV</div>
                <img src={require('../../assets/images/logos/logos-2.png')} alt='' />
                <div className='platformprice'><input type='checkbox' /></div>
              </li>
              <li>
                <div className='platformname'>Sony LIV</div>
                <img src={require('../../assets/images/logos/logos-2.png')} alt='' />
                <div className='platformprice'><input type='checkbox' /></div>
              </li> 
              <li>
                <div className='platformname'>Sony LIV</div>
                <img src={require('../../assets/images/logos/logos-2.png')} alt='' />
                <div className='platformprice'><input type='checkbox' /></div>
              </li> 
              <li>
                <div className='platformname'>Sony LIV</div>
                <img src={require('../../assets/images/logos/logos-2.png')} alt='' />
                <div className='platformprice'><input type='checkbox'  /></div>
              </li>      
          </ul>
        </div> 

          <div className='modal-footer'>
            <button className='subsplan-btn'>Done</button>            
          </div>
        </div>
      </Modal>
    </Fragment>
  )
}

export default Index
