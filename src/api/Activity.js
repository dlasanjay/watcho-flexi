import axios from "axios";

const encryptData = async (key_data) => {
 

  let config = {
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization, X-Request-With',
        'Access-Control-Allow-Credentials': 'false'
    }
  }

    let data = await axios
    .post('http://13.200.59.64:8080/encrypt',{
        'data' : JSON.stringify(key_data)
    },config)
    
    .then(function (response) {
   
      return response.data.data;
    })
    .catch(function (error) {
      return error;
    });
    return data;
}


const deryptData = async (key_data) => {
    
   
    let config = {
        headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
        }
      }
      
    let data = await axios
    .post('/api/v1/decrypt',{
        'data' : key_data
    },
    config)
    .then(function (response) {
      console.log('decrypted',response.data)
      return response.data.message;
    })
    .catch(function (error) {
      return JSON.parse(error);
    });
    // console.log(data, 'data')
    return data;
}

const getPlanList = async (params) => {
   
    let data = await axios
    .post('/api/WatchoSubscription/GetAvilableSubscriptionPlanDetails',{ 
      "Inputparam":params
      })
    .then(function (response) {
      console.log(response, 'plan list response api')
        return deryptData(response.data)
    })
    .catch(function (error) {
      console.log(error, 'plan list error api')

        return error
    });
    return data;
}

const applyCoupon = async (params) => {
    let data = await axios
    .post('/api/WatchoSubscription/VaildPromoCode ',{ 
      "Inputparam":params
      })
    .then(function (response) {
  
        return deryptData(response.data)
    })
    .catch(function (error) {
        return error
    });
    return data;
}

const sendOtpRequest = async (params, token) => {

  let config = {
    headers: {
        'Authorization' : token,
    }
  }
  let data = await axios
  .post('/api/WatchoSubscription/GenerateOTPForLogin',{ 
    "Inputparam":params
    },config)
  .then(function (response) {

      return deryptData(response.data)
  })
  .catch(function (error) {
    return deryptData(error.response.data)
    console.log(error.response.data, "error")
      return error
  });
  return data;
}


const validateOtp = async (params, token) => {
  let config = {
    headers: {
        'Authorization' : token,
    }
  }
  console.log(config, 'config')
  let data = await axios
  .post('/api/WatchoSubscription/ValidateOTPForLogin',{ 
    "Inputparam":params
    },config)
  .then(function (response) {
    console.log(response, 'response')
      return deryptData(response.data)
  })
  .catch(function (error) {
    console.log(error, 'error')

    return deryptData(error.response.data)
    console.log(error.response.data, "error")
      return error
  });
  return data;
}





const VaildPromoCode = async (params, token) => {
  // var success = 'SnDZYIrW8xeic9rq+EAe2ss/XbXaUEPZxxmCBfdnQ5vaR1SgfToPNRy9akH9xky3LlXioaenZLs+cV6FeLnfZbJno+FkqkhcdYoFkGmFRK5HkRBNAbE61q7ALJ/04f85Nuu9jBYV/Fq8n10bgKu7otr198nFoQ3mvxoR8TJl/HRHmkLRu9GZjF8g/Yzu2Ct6HDJ7b93gt/gqFnTYh2ZswCipHinhLmwnED8DZqdMapUGcpJ7u8haiTE5t6EJkHGLF2ZeS0cBZp9o65gHy6R3SNtquKT7IPKvcxMSGHokIfI=';
  // return deryptData(success)

  let config = {
    headers: {
        'Authorization' : token,
    }
  }

  let data = await axios
  .post('/api/WatchoSubscription/VaildPromoCode',{ 
    "Inputparam":params
    },config)
  .then(function (response) {
    console.log(response, 'response')
      return deryptData(response.data)
  })
  .catch(function (error) {
    console.log(error, 'error')

    return deryptData(error.response.data)
    console.log(error.response.data, "error")
      return error
  });
  return data;
}



const generateTokenAPI = async (params) => {

  let data = await axios
  .post('/api/WatchoSubscription/GenerateToken',{ 
    "Inputparam":params
    })
  .then(function (response) {
    console.log(response, 'response')
      return deryptData(response.data)
  })
  .catch(function (error) {
    console.log(error, 'error')

    return deryptData(error.response.data)
  
  });
  return data;
}



const generateSubscriptionRequestAPI = async (params, token) => {
  let config = {
    headers: {
        'Authorization' : token,
    }
  }

  let data = await axios
  .post('/api/WatchoSubscription/GenerateSubscriptionRequest ',{ 
    "Inputparam":params
    },config)
  .then(function (response) {
    console.log(response, 'response')
      return deryptData(response.data)
  })
  .catch(function (error) {
    console.log(error, 'error')

    return deryptData(error.response.data)
  
  });
  return data;
}
export {deryptData, getPlanList, encryptData, sendOtpRequest, validateOtp, VaildPromoCode, generateTokenAPI, generateSubscriptionRequestAPI}
