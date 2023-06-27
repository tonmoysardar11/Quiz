import React, { useState, useContext } from 'react'
import qContext from '../context/qcontext';

const Play = () => {
  const context = useContext(qContext);
  const { qno, qlist, activeno,next } = context;
  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <h3>Question No. {activeno} </h3>
      {activeno}.{qlist[activeno - 1].question}

      <h5 className='my-3'>Options</h5>
      <div>
      {qlist[activeno - 1].options.map((element, index) => {
        return < div className="form-check my-2" key={index} >
          <input className="form-check-input" type="radio" name={activeno} id={`option${index}`} />
          <label className="form-check-label" htmlFor={`option${index}`}>
            {element}
          </label>
        </div >
      })}
      </div>
      <button className='btn btn-info my-3' onClick={next}>Next <i className="fa-solid fa-play"></i></button>

    </div>
  )
}

export default Play


