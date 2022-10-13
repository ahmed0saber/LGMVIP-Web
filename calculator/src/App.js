import './App.css';
import React, {useState} from 'react';

const App = () => {
  const [result, setResult] = useState("")

  const handleClick = (e) => {
    setResult(result.concat(e.target.name))
  }

  const clear = () => {
    setResult("")
  }

  const backspace = () => {
    setResult(result.slice(0, result.length - 1)) // slice(0, -1)
  }

  const calculate = () => {
    try{
      setResult(eval(result).toString())
    }
    catch(err){
      setResult("Error")
    }
  }

  return (
    <div className="container">
      <form>
        <input type="text" className="txt" value={result} readOnly/>
      </form>
      <div className="btns">
        <button onClick={clear} className="btn">Clear</button>
        <button onClick={backspace} className="btn">Del</button>
        <button onClick={handleClick} name="/" className="btn">&divide;</button>
        <button onClick={handleClick} name="7">7</button>
        <button onClick={handleClick} name="8">8</button>
        <button onClick={handleClick} name="9">9</button>
        <button onClick={handleClick} name="*" className="btn">&times;</button>
        <button onClick={handleClick} name="4">4</button>
        <button onClick={handleClick} name="5">5</button>
        <button onClick={handleClick} name="6">6</button>
        <button onClick={handleClick} name="-" className="btn">&ndash;</button>
        <button onClick={handleClick} name="1">1</button>
        <button onClick={handleClick} name="2">2</button>
        <button onClick={handleClick} name="3">3</button>
        <button onClick={handleClick} name="+" className="btn">+</button>
        <button onClick={handleClick} name="0">0</button>
        <button onClick={handleClick} name=".">.</button>
        <button onClick={calculate} className="btn">=</button>
      </div>
    </div>
  )
}


export default App;