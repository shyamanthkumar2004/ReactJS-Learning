import React from 'react'
const div = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyoptions=[],
  selectedcurr='usd',
  amountDisabled=false,
  currencyDisabled=false
}) => {
  return (
    <div>
      <div className='w-3/4 h-28 bg-white flex flex-wrap rounded-2xl justify-between border-red-700 border-4' style={{marginLeft:"12%",marginTop:"3%"}}>
        <div className='flex flex-col mt-5 ml-2'>
            <label htmlFor="from">{label}</label>
            <input type="number" name='from' className='w-48 mt-3 border-black border-2 rounded-lg' placeholder='Amount'
            value={amount} disabled={amountDisabled} onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
            />
        </div>
        <div className='flex flex-col mt-5'>
        <label htmlFor="type">Type</label>
        <select className='mt-3 mr-2 border-black border-2 rounded-lg w-22 p-1' value={selectedcurr} onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
          >
            {currencyoptions.map((option)=>(
              <option key={option} value={option}>{option}
              </option>
            ))}
        </select>
        </div>
    </div>
    </div>
  )
}

export default div
