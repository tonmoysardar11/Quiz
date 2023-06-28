import React,{useContext} from 'react'
import qContext from '../context/qcontext'
import { Link } from 'react-router-dom';

const Finish = () => {
    const context = useContext(qContext);
    const {right,wrong,reset}=context;
  return (
    <div>
        <h4 className="my-3" style={{color:"#00d500"}}>Correct Answers: <b>{right} </b>x 1pt</h4>
        <h4 className="my-3"style={{color:"red"}}>Wrong Answers: <b>{wrong} </b>x -0.33pt</h4>
        <h3>Total Score: {(right*1-wrong*0.33).toFixed(2)}</h3>
        <Link className='btn btn-info my-3' role='button' to="/" onClick={reset}>Play Again<i className="fa-solid fa-rotate-right mx-2"></i></Link>

      
    </div>
  )
}

export default Finish
