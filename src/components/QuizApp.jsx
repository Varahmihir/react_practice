import React, { useEffect, useState } from 'react'

export default function QuizApp() {
    const [count,setCount]=useState(0);
    const [qsn,setQsn]=useState([]);
    const time=10;
    const [completed,setCompleted]=useState(false);
    const [timeLeft,setTimeLeft]=useState(time);
    useEffect(()=>{
        if(count<4){
        const fetchQuestion=async()=>{
            try{
                const response =await fetch(`http://localhost:3000/qsns/${count}`)
                const data=await response.json();
                setQsn(data);
            }catch(error){
                console.error('error fetching qsn',error);
            }
        };
    fetchQuestion();
        setClicked(null)
      
    const timer = setTimeout(()=>{
            setCount((count+1));
            setTimeLeft(time)
        },time*1000);
    return ()=>clearTimeout(timer);

}else{
setCompleted(true);}
},[count]);
    useEffect(()=>{
        if(timeLeft>0){
            const interval=setInterval(()=>{

                setTimeLeft((prevTimeLeft)=>prevTimeLeft-1)
            },1000);
            return()=>clearInterval(interval);
        }
    },[timeLeft]);
    const [clicked,setClicked]=useState(null)
    const [isCorrect, setIsCorrect] = useState(null); // State to track if the clicked option is correct
const [score,setScore]=useState(0)
    const handleClick=(op)=>{
        // const correct= qsn.o===qsn.ans
        setClicked(op);
        setIsCorrect(qsn[op] === qsn.ans); // Check if the clicked option is correct
if(isCorrect){
    setScore((score+1));
}
    }

   

  return (
    <div>
    {!completed?( <div className='quiz container'>
        <h2>Question no. {count}</h2>
        <p style={{position:'absolute',right:'10px',top:'20px',color:'green'}}> time left: {timeLeft} seconds</p>
        <div className='qsn'>
        <h3>{qsn.title}</h3>
        <p>
            <button id='op1'
            value={qsn.o1} onClick={()=>handleClick('o1')}
            style={{backgroundColor: clicked==='o1'?(isCorrect?'green':'red'):'initial'}}>
             
                {qsn.o1}</button>
            <button id='op2'
            value={qsn.o2} onClick={()=>handleClick('o2')}
            style={{backgroundColor: clicked==='o2'?(isCorrect?'green':'red'):'initial'}}>{qsn.o2}</button>
        </p>

        </div>
      </div>
      ):(
        <div><p> score : {score}</p></div>)
      }
      
    </div>
  );
}
