import React, { useContext } from 'react'
import qContext from '../context/qcontext';
import { Link } from 'react-router-dom';

const Play = () => {

  const context = useContext(qContext);
  const {qno,qlist, activeno, next, timer, anschange, option, cnf, cnfstate,disabled,btndisabled,click} = context;

  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <div className='d-flex justify-content-start align-items-center w-100'>
      <span className='my-3' style={{fontSize:'16px'}}>Time Left: <span style={timer<5?{color:'red'}:{}}>{timer}</span></span>
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

        {activeno===qno?<Link ref={click} className='btn btn-info my-3' role='button' to="/finish">Play <i className="fa-solid fa-play"></i></Link>:<button ref={click}
          className={cnfstate ? 'btn btn-info mx-3' : 'btn btn-info mx-3 disabled'}
          onClick={activeno===qno?'':next}
        >
          {activeno===qno?'Finish':'Next'}
          <i className="fa-solid fa-play mx-1">
          </i>
        </button>}
      </div>

    </div>
  )
}

export default Play


