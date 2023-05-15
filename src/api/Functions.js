
const filterPlans1 = (plans, type, name = null) => {
    let temp = plans.filter((arry)=>{
      if(!(arry.SubscriptionPlanType).toLowerCase().includes('flex') && !(arry.SubscriptionPlanType).toLowerCase().includes('exclusive')) {

        if(name != null) {
            return arry.SubscriptionPlanName==name &&   arry.SubscriptionPlanDurationName ==type
        }
        else {
            return arry.SubscriptionPlanDurationName == type
        }
      }
      });
    return temp;
}

const filterPlans = (plans, type, name = null) => {
 
  
    let temp = plans.filter((arry)=>{
       
            if(!(arry.SubscriptionPlanType).toLowerCase().includes('flex') && !(arry.SubscriptionPlanType).toLowerCase().includes('exclusive')) {
      
              if(name != null) {
                  return arry.SubscriptionPlanName==name &&   arry.SubscriptionPlanDurationName ==type
              }
              else {
                  return arry.SubscriptionPlanDurationName == type
              }
            }
      });
    

    return temp;
}

function maxPlan(temp, type, name = null) {
    var max_plan = temp.filter((arry)=>{
        return (arry.SubscriptionPlanName).toLowerCase().includes('watcho max') && arry.SubscriptionPlanDurationName ==type
       
        
            
      });
      return max_plan
     
}
var planApps = [];

const getOTTKeys =(temp) => {
    temp.map((value) => {
        if(value.SubscriptionApps && value.SubscriptionApps.length > 0) {
          value.SubscriptionApps.map((app) => {
            planApps[app.AppCode] = {'app' : app, 'compare' : [] };
          });
        }
    })
    var planAppData = Object.keys(planApps)
    return planAppData;

  }



  const compareData = (temp, maxPlan = null) => {
    var planNames = [];
    var planAppData = getOTTKeys(temp)
   
    maxPlan.map((value) => {
        if((value.SubscriptionPlanName).toLowerCase().includes('watcho max')) {

            planNames[value.SubscriptionPlanName] = value
            if(value.SubscriptionApps && value.SubscriptionApps.length > 0) {
             
              value.SubscriptionApps.map((app) => {
                planApps[app.AppCode]['compare'][value.SubscriptionPlanName] = value
              });
            }
        }
     
    })
    temp.map((value) => {
        if(!(value.SubscriptionPlanName).toLowerCase().includes('watcho max')) {

            planNames[value.SubscriptionPlanName] = value
            if(value.SubscriptionApps && value.SubscriptionApps.length > 0) {
             
              value.SubscriptionApps.map((app) => {
                planApps[app.AppCode]['compare'][value.SubscriptionPlanName] = value
              });
            }
        }
     
    })
    var planAppData = Object.keys(planApps)
    var planNameObj = Object.keys(planNames)

    planAppData.map((data) => {
      planNameObj.map((key) => {
          if(!planApps[data]['compare'][key]) {

            planApps[data]['compare'][key] = {}
          }
        });

    })
    var planKeys = Object.keys(planApps)
    
    return {planPrices : planNames, ottList : planApps, planNames : planNameObj, planKeys : planKeys}

  } 

  const removeFromString = (words, str) => {
    return words.reduce((result, word) => result.replace(word, ''), str)
  }

  const calculatePercentage = (original_price, price_after) => {
    return (((original_price - price_after)/original_price)*100).toFixed(0);
  }

export {filterPlans, getOTTKeys, compareData, removeFromString, calculatePercentage, maxPlan}