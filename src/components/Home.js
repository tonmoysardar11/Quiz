import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import qContext from '../context/qcontext'


const Home = () => {
  const context = useContext(qContext);
  const { qno,qnochange,play } = context;

  return (
    <div className="start d-flex justify-content-center align-items-center flex-column">
      <h3 className='text-center my-3'>Lets Play Quiz</h3>
      <h4 className='text-center my-3'>Rules</h4>
      <ul className='my-3'>
        <li>You Can Choose Total Number of Questions.</li>
        <li>Each Question Has There Options With One Correct Answer.</li>
        <li>For Each Question You Will Get 30 Seconds.</li>
        <li>For Every Correct Answer You Will Get 1 Point.</li>
      </ul>
      <form className='d-flex justify-content-center align-items-center'>
      <label htmlFor="qno" className="form-label mx-2 my-auto"><h6>Number of Questions</h6></label>
      <input type="number" id='qno' className="form-control" placeholder='Enter Number of Questions' value={qno} onChange={qnochange} style={{width:'60px'}} />
      </form>

      <Link className={`btn btn-info my-3 ${qno===0?'disabled':''}`} role='button' to="/play" onClick={play}>Play <i className="fa-solid fa-play"></i></Link>

    </div>
  )
}

export default Home
