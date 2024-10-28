import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [number, setNumber] = useState(0)
  const maxNumber = 100;
  const minNUmber = 0;
  
  function Increment(){
    if (number < maxNumber){
      setNumber(number+1)
    }
  }
  function Decrease(){
    if (number > minNUmber){
      setNumber(number-1)
    }
  }
  function Reset(){
    setNumber(0);
  }




  return (
    
     <>
     <h2>COUNTER</h2>
     <div className='counter-body'>
    <p className='pnumber'>{number}</p>
    <br/>
    
    <button onClick={Increment} className='btnincrease'>+</button>
    <button onClick={Decrease} className='btndecrease'>-</button>
    
    <button onClick={Reset}className='btnreset'>reset</button> </div>  </>
    
    
     
    
  )
}

export default App
