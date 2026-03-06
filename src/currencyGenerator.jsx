import {React, useState} from 'react';
import {CurrencyInput} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
const CurrencyGenerator = () => {
  
  // In the above code we have a currency converter app. We have two input boxes, one for the amount and one for 
  // the currency type. We have a swap button to swap the from and to currency. 
  // We have a convert button to convert the amount from the from currency to the to currency.
  //  We are using a custom hook useCurrencyhook to fetch the exchange rates for the selected currency. 
  // We are using the useState hook to manage the state of the amount, from currency, to currency and converted amount.
 const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
    return (
      <> 
            <div
        className="text-black w-full mt-5 flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
       
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-gray-700">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
          <h1 className='text-white mb-3 text-center text-2xl'>Currency Converter</h1>

                    <div className="w-full mb-1">
                        <CurrencyInput
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setAmount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <CurrencyInput
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={from}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
      </>    
    );
};

export default CurrencyGenerator;