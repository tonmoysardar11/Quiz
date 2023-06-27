import './App.css';
import Home from './components/Home';
import { HashRouter,Routes,Route } from 'react-router-dom';
import Play from './components/Play';
import QuizState from './context/QuizState';


function App() {
  return (
    <QuizState>
    <div className='app'>
      {/* <Play/> */}
      <HashRouter>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/play' element={<Play/>}/>
    </Routes>
    </HashRouter>
    </div>
    </QuizState>
  );
}

export default App;
