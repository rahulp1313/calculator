import React, { useState } from 'react'
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  const [result, setResult] = useState("");

  const clickHandle = (event)=>{
    setResult(result.concat(event.target.value))
  }

  const clearDisp=()=>{
    setResult("");
  }

  const calulate=()=>{
    setResult(eval(result))
  }

  return (
    <div className="container-fluid bg">
    <div className="row">
      <div className="col-md-4 offset-4 p-0">
        <input type="text" className="infeild  py-4 px-2" id="answer" value={result} placeholder="0" />
      </div>
    </div>
    <div className="row">
      <div className="col-md-4 offset-4">
        <div className="row text-center">
          <div className="col fw-bold">
            <button className="btn1  py-2" value="c" type="button" onClick={clearDisp}>
              c
            </button>
          </div>
          <div className="col fw-bold">
            <button className="btn1  py-2" type="button">
              +/-
            </button>
          </div>
          <div className="col fw-bold">
            <button className="btn1  py-2" type="button" >
              B
            </button>
          </div>
          <div className="col fw-bold">
            <button className="btn1 btn-c py-2" value="%" type="button" onClick={clickHandle}>
              %
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-4 offset-4">
        <div className="row text-center">
          <div className="col fw-bold">
            <button className="btn1  py-2" value="7" type="button" onClick={clickHandle}>
              7
            </button>
          </div>
          <div className="col fw-bold">
            <button className="btn1 py-2" value="8" type="button" onClick={clickHandle}>
              8
            </button>
          </div>
          <div className="col fw-bold">
            <button className="btn1  py-2" value="9" type="button" onClick={clickHandle}>
              9
            </button>
          </div>
          <div className="col fw-bold">
            <button className="btn1 btn-c py-2" value="/" type="button" onClick={clickHandle}>
              /
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-4 offset-4">
        <div className="row text-center">
          <div className="col fw-bold">
            <button className="btn1  py-2" value="4" type="button" onClick={clickHandle}>
              4
            </button>
          </div>
          <div className="col fw-bold">
            <button className="btn1  py-2" value="5" type="button" onClick={clickHandle}>
              5
            </button>
          </div>
          <div className="col fw-bold">
            <button className="btn1  py-2" value="6" type="button" onClick={clickHandle}>
              6
            </button>
          </div>
          <div className="col fw-bold">
            <button className="btn1 btn-c  py-2" value="*" type="button" onClick={clickHandle}>
              x
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-4 offset-4">
        <div className="row text-center">
          <div className="col fw-bold">
            <button className="btn1  py-2" value="1" type="button" onClick={clickHandle}>
              1
            </button>
          </div>
          <div className="col fw-bold">
            <button className="btn1  py-2" value="2" type="button" onClick={clickHandle}>
              2
            </button>
          </div>
          <div className="col fw-bold">
            <button className="btn1  py-2" value="3" type="button" onClick={clickHandle}>
              3
            </button>
          </div>
          <div className="col fw-bold">
            <button className="btn1  py-2 btn-c" value="-" type="button" onClick={clickHandle}>
              -
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-4 offset-4">
        <div className="row text-center">
        <div className="col fw-bold">
            <button className="btn1  py-2" value="0" type="button" onClick={clickHandle}>
              0
            </button>
          </div>
          <div className="col fw-bold">
            <button className="btn1  py-2" value="." type="button" onClick={clickHandle}>
              .
            </button>
          </div>
          <div className="col fw-bold">
            <button className="btn1  py-2" type="button" onClick={calulate}>
              =
            </button>
          </div>
          <div className="col fw-bold">
            <button className="btn1 btn-c py-2" value="+" type="button" onClick={clickHandle}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}

export default App;

