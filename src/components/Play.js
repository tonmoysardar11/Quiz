import React, { useContext } from 'react'
import qContext from '../context/qcontext';

const Play = () => {

  const context = useContext(qContext);
  const {qno,qlist, activeno, next, timer, anschange, option, cnf, cnfstate,disabled,btndisabled,point,finish } = context;

  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <div className='d-flex justify-content-between align-items-center w-100'>
      <h6 className='my-3'>Time Left: {timer}</h6>
      <h6>Score: {point}</h6>
      </div>
      <h4>Question No. {activeno} </h4>
      <b className='my-2'>{qlist[activeno - 1].question}</b>
      <div>
        {qlist[activeno - 1].options.map((element, index) => {

          return <div
            className="form-check my-2"
            key={index}
          >
            <input
              className="form-check-input"
              type="radio"
              name={activeno}
              id={`option${index}`}
              value={element}
              checked={option === element}
              onChange={anschange} 
              disabled={disabled}
              />

            <label
              htmlFor={`option${index}`}
              style={disabled? (element===qlist[activeno - 1].answer?({color:"#00d500"}):(option===element?{color:"red"}:{})) :(option===element?{color:"yellow"}:{})}>
              {element}
            </label>
          </div >

        })}

      </div>

      <div>
        <button
          className='btn btn-success mx-3'
          onClick={cnf}
          disabled={btndisabled}
        >
          Confirm
          <i className="fa-solid fa-check mx-1">
          </i>
        </button>

        <button
          className={cnfstate ? 'btn btn-info mx-3' : 'btn btn-info mx-3 disabled'}
          onClick={activeno===qno?finish:next}
        >
          {activeno===qno?'Finish':`Next <i className="fa-solid fa-play mx-1></i>`}
        </button>
      </div>

    </div>
  )
}

export default Play


