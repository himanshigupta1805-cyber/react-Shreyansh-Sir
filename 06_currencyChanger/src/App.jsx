import { useState } from 'react'
import  InputBox  from './components/Inputbox.jsx'
import useCurrencyInfo from './hooks/useCurrencyinfo.js'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to , setTo] = useState("inr")
  const [convertedAmount , setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  console.log("currencyInfo", currencyInfo);
  const options = Object.keys(currencyInfo)

  const swap= function(){
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert =()=> {
    setConvertedAmount(currencyInfo[to]*amount )
  }



  return (
    <>
    <div className="h-screen w-screen flex flex-col md:flex-row">
      <div 
        className= "w-full md:w-1/2 h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg)'
          }}>
        <div className= "w-full" >
          <div className = "w-full max-w-md mx-auto border-gray-60 rounded-lg p-5 background-blur-sm bg-white/30">
            <form 
              onSubmit = {(e)=>{
                e.preventDefault();
                convert()
              }}
              >
                <div className = "relative">
                <div className='w-full mb-1'>
                  <InputBox 
                    label = "From"
                    amount = {amount}
                    onAmountChange = {
                      (currency)=>setAmount(currency)
                    }
                    onCurrencyChange = {
                      (currency)=>setFrom(currency.toLowerCase())
                    }
                    selectCurrency = {from}
                    currencyOptions = {options}
                    />
                </div>
                    <div>
                      <button
                        type='button'
                        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-white rounded-lg bg-blue-600 text-white px-4 py-1 shadow-lg"
                        onClick = {swap}
                      >
                        SWAP
                      </button>
                    </div>
                <div className='w-full mb-1'>
                  <InputBox 
                    label = "To"
                    amount = {convertedAmount}
                    onCurrencyChange = {
                      (currency)=>setTo(currency.toLowerCase())
                    }
                    selectCurrency = {to}
                    currencyOptions = {options}
                    amountDisabled
                    />
                </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                  Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
            </form>
          </div>
        </div>
        
      </div>
      <div className="hidden md:block w-1/2 h-screen">
            <img src=" https://images.pexels.com/photos/218392/pexels-photo-218392.jpeg"
             className="object-cover w-full h-full"
            />
        </div>
      </div>
    </>
  )
}

export default App
