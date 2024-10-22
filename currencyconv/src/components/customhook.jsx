import React from 'react'
import { useState,useEffect } from 'react'

const customhook = (currency) => {
    const[data,setData]=useState({})
        useEffect(()=>{
            fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.10.22/v1/currencies/${currency}.json`).then(res=>res.json()).then(data=>setData(data[currency]))
        },[currency])
  return data;
}

export default customhook
