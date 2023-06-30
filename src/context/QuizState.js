import React, { useState, useRef, useEffect } from 'react'
import qContext from './qcontext'
import quizQuestions from '../questions';



const QuizState = (props) => {
    const click = useRef();
    const [qlist, setqlist] = useState([]);
    const [activeno, setactiveno] = useState(0);
    const [qno, setqno] = useState(5);
    const [timer, settimer] = useState(null);
    const [option, setoption] = useState('');
    const [cnfstate, setcnfstate] = useState(false);
    const [disabled, setdisabled] = useState(false);
    const [btndisabled, setbtndisabled] = useState(true);
    const [right, setright] = useState(0);
    const [wrong, setwrong] = useState(0);
    const [na, setna] = useState(0);



    const reset = () => {
        setactiveno(1);
        setbtndisabled(true);
        setcnfstate(false);
        setdisabled(false);
        setoption('');
        setqlist([]);
        setqno(5);
        setright(0);
        setwrong(0);
        settimer(null)

    }


    const qnochange = (e) => {
        setqno(Number(e.target.value));
    }


    const play = () => {

        let list = [];
        for (let index = 0; index < qno; index++) {
            let x = Math.floor(Math.random() * 20 + 1);
            list.push(quizQuestions[x])
        }
        setqlist(qlist.concat(list));
        setactiveno(1);



    }


    useEffect(() => {
        settimer(15)
    }, [activeno]);


    useEffect(() => {
        let func=setInterval(() => {
            settimer(timer-1)
        }, 1000);
        if(timer<0){
            clearInterval(func)
            click.current.click()
        }
        return()=>{clearInterval(func)
        };
    }, [timer]);   
    
    
    const next = () => {
        setactiveno(activeno + 1)
        setcnfstate(false);
        setoption('')
        setdisabled(false)
    }
    
    
    const anschange = (e) => {
        setoption(e.target.value);
        setbtndisabled(false)
    }
    
    
    const cnf = () => {
        setbtndisabled(true)
        setdisabled(true)
        setcnfstate(true)
        qlist[activeno - 1].answer === option ? setright(right + 1) : setwrong(wrong + 1)
    }
    
    
    return (
        <qContext.Provider value={{ setqno, qno, qnochange, play, qlist, activeno, next, timer, option, anschange, cnf, cnfstate, disabled, btndisabled, right, wrong, reset, click,na,setna }}>
            {props.children}
        </qContext.Provider>
    )
}

export default QuizState
