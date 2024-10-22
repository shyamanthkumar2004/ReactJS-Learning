import { useState } from 'react'
import './App.css'
import Div from './components/div'
import Usecurr from './components/customhook'
function App() {
  const [convertedamount,setConvertedamount]=useState(0)
  const [amount, setAmount] = useState()
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const customhook=Usecurr(from)
  const options=Object.keys(customhook)

  const convert=()=>{
    const amt=amount*customhook[to]
    setConvertedamount(amt.toFixed(2))
  }
  function swap(){
    const temp=from
    setFrom(to)
    setTo(temp)
  }
  return (
    <>
      <div className='w-full h-screen ' style={{
        backgroundImage:'url(https://media.istockphoto.com/id/1346120086/photo/black-pedestal-and-dollar-coins-with-red-neon-lights-3d-illustration.jpg?s=612x612&w=0&k=20&c=eivKQ-60qGa2onzgboulbpMM4H-Qo0orN1Z4hooGqUQ=)',
        backgroundAttachment:'fixed',backgroundRepeat:'no-repeat',backgroundSize:'cover'
        }}>
          <h1 className='fixed top-24 text-4xl italic' style={{color:"white",textAlign:"center",marginLeft:"42%"}}>Currency Converter</h1>
          <div className='h-1/2 bg-red-200 fixed rounded-2xl backdrop-blur backdrop-filter bg-opacity-30' style={{marginLeft:"30%",width:"40%",marginTop:"12%"}}>
            <Div label="From" amount={amount} currencyoptions={options} onCurrencyChange={(currency)=>setFrom(currency)}
              onAmountChange={(amount)=>setAmount(amount)}  selectedcurr={from} 
              />
            <button className='w-15 h-15 rounded-full bg-red-200 p-4' style={{marginLeft:"45%",marginTop:"3%"}} onClick={swap}>Swap</button>
            <Div label="TO" amount={convertedamount} currencyoptions={options} onCurrencyChange={(Currency)=>setFrom(Currency)}
            onAmountChange={(amount)=>setAmount(amount)} selectedcurr={to} amountDisabled={true} currencyDisabled={true}
              />
            <button className='bg-blue-600 w-56 h-8 rounded-2xl mt-5 ml-56' onClick={convert}>Convert</button>
          </div>
      </div>
    </>
  )
}

export default App
