import React, { useState } from "react";
import GlobalContext from "./GlobalContext";

export const GlobalState = (props) => {
    const [selectedPlan, setSelectedPlan] = useState({});
    const [auth, setAuth] = useState({});
    const [authToken, setAuthToken] = useState('');
    const [order, setOrder] = useState({});


    const setCheckoutPlan = (plan) => {
        setSelectedPlan(plan)
        // eslint-disable-next-line
    }
    const setAuthorization = (data) => {
        setAuth(data)
        // eslint-disable-next-line
    }
    const setAuthorizationToken = (data) => {
        setAuthToken(data)
        // eslint-disable-next-line
    }
    const setOrderDetails = (data) => {
        setAuthToken(data)
        // eslint-disable-next-line
    }
    return (
        <GlobalContext.Provider value={{selectedPlan, setCheckoutPlan, auth, setAuthorization, authToken, setAuthorizationToken, order, setOrderDetails}}>
            {props.children}
        </GlobalContext.Provider>
    )
}