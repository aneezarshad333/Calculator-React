import { useState } from 'react'
import './App.css'

function App() {
  const [calculatorScreen, setCalculatorScreen] = useState('')
  const clrAll = () => {
    setCalculatorScreen('')
  }
  const displayInput = (input) => {
    var newInput = calculatorScreen
    newInput += input
    setCalculatorScreen(newInput)
  }
  const formatResult = (result) => {
    var num = Intl.NumberFormat('en-US').format(result)
    setCalculatorScreen(num)
  }
  const calculate = () => {
    var replaced = calculatorScreen.replace(",", "")
    try {
      formatResult(String(eval(replaced)))
    }
    catch {
      setCalculatorScreen('Invalid')
    }
  }
  const deleteInput = () => {
    setCalculatorScreen(String(calculatorScreen).slice(0, -1))
  }
  const [mode, setMode] = useState(true)
  const [background,setBackground]=useState('#e4e5f1')
  const lightMode = () => {
    setMode(true)
    setBackground('#e4e5f1')
  }
  const darkMode = () => {
    setMode(false)
    setBackground('#121212')
  }
  return (
    <>
      <div id='mainDiv'style={{ width: '100%', height: '100vh', backgroundColor: `${background}` }} >
        <div className='text-center pt-3'>
          {mode ?
            <button className='btn' onClick={darkMode}><i class="fa-solid fa-sun fa-l" ></i></button> 
            : 
            <button className='btn'onClick={lightMode} style={{color:'white'}}><i class="fa-solid fa-moon" ></i></button>
          }
        </div>
        <div className='d-flex justify-content-center mt-3'>
          {/* Calculator Body */}
          <div style={{ backgroundColor: '#000000' }} className='rounded-5'>
            <div style={{ width: '350px', height: '610px' }} className='border rounded-5'>
              {/* Result */}
              <div className='w-100' style={{ height: '200px' }}>
                <input type="text" id='result' value={calculatorScreen} disabled className='w-100 rounded-top-5 ps-3' style={{ height: '100%', fontSize: '60px', paddingTop: '145px', color: '#ffffff', backgroundColor: '#000000', border: 'none' }} />
              </div>
              {/* Buttons */}
              <div className='mt-3 w-100' style={{ height: '400px' }}>
                <div className="d-flex justify-content-evenly">
                  <button className='btn rounded-circle buttons' id="lightGray" onClick={clrAll}>AC</button>
                  <button className='btn rounded-circle buttons' id="lightGray" onClick={deleteInput}>C</button>
                  <button className='btn rounded-circle buttons' id="lightGray" onClick={() => displayInput('%')}>%</button>
                  <button className='btn rounded-circle buttons' id="vividGamboge" onClick={() => displayInput('/')}>&#247;</button>
                </div>
                <div className="d-flex justify-content-evenly mt-2">
                  <button className='btn rounded-circle buttons' id="darkLiver" onClick={() => displayInput('7')}>7</button>
                  <button className='btn rounded-circle buttons' id="darkLiver" onClick={() => displayInput('8')}>8</button>
                  <button className='btn rounded-circle buttons' id="darkLiver" onClick={() => displayInput('9')}>9</button>
                  <button className='btn rounded-circle buttons' id="vividGamboge" onClick={() => displayInput('*')}>&#215;</button>
                </div>
                <div className="d-flex justify-content-evenly mt-2">
                  <button className='btn rounded-circle buttons' id="darkLiver" onClick={() => displayInput('4')}>4</button>
                  <button className='btn rounded-circle buttons' id="darkLiver" onClick={() => displayInput('5')}>5</button>
                  <button className='btn rounded-circle buttons' id="darkLiver" onClick={() => displayInput('6')}>6</button>
                  <button className='btn rounded-circle buttons' id="vividGamboge" onClick={() => displayInput('-')}>&#8722;</button>
                </div>
                <div className="d-flex justify-content-evenly mt-2">
                  <button className='btn rounded-circle buttons' id="darkLiver" onClick={() => displayInput('1')}>1</button>
                  <button className='btn rounded-circle buttons' id="darkLiver" onClick={() => displayInput('2')}>2</button>
                  <button className='btn rounded-circle buttons' id="darkLiver" onClick={() => displayInput('3')}>3</button>
                  <button className='btn rounded-circle buttons' id="vividGamboge" onClick={() => displayInput('+')}>&#43;</button>
                </div>
                <div className="d-flex justify-content-evenly mt-2">
                  <button className='btn rounded-pill zeroPill' id="darkLiver" onClick={() => displayInput('0')}>0</button>
                  <button className='btn rounded-circle buttons' id="darkLiver" onClick={() => displayInput('.')}>.</button>
                  <button className='btn rounded-circle buttons' id="vividGamboge" onClick={calculate}>=</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
