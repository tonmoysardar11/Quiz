import React, { useState } from 'react'
import qContext from './qcontext'
import quizQuestions from '../questions';



const QuizState = (props) => {
    const [qlist, setqlist] = useState([]);
    const [activeno, setactiveno] = useState(1);
    const [qno, setqno] = useState(5);
    const [timer, settimer] = useState(30);
    const [option, setoption] = useState('');
    const [cnfstate, setcnfstate] = useState(false);
    const [disabled, setdisabled] = useState(false);
    const [btndisabled, setbtndisabled] = useState(true);
    const [point, setpoint] = useState(0);




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

    }
    const next = () => {
        setactiveno(activeno + 1)
        settimer(30);
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
        qlist[activeno - 1].answer===option?setpoint(point+1):setpoint(point)
    }

    return (
        <qContext.Provider value={{ setqno,qno, qnochange, play, qlist, activeno, next, timer, option, anschange, cnf,cnfstate,disabled,btndisabled,point  }}>
            {props.children}
        </qContext.Provider>
    )
}

export default QuizState
