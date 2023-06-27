import React, { useState } from 'react'
import qContext from './qcontext'
import quizQuestions from '../questions';

const QuizState = (props) => {
    const [qlist, setqlist] = useState([]);
    const [activeno, setactiveno] = useState(1);
    const [qno, setqno] = useState(5);
    const change = (e) => {
        setqno(Number(e.target.value));
    }
    const play = () => {
        let list = [];
        for (let index = 0; index < qno; index++) {
            let x = Math.floor(Math.random() * 20 + 1);
            list.push(quizQuestions[x])
        }
        setqlist(qlist.concat(list))
    }
    const next=()=>{
        setactiveno(activeno+1)
    }

    return (
        <qContext.Provider value={{ setqno, qno, change, play, qlist,activeno,next }}>
            {props.children}
        </qContext.Provider>
    )
}

export default QuizState
