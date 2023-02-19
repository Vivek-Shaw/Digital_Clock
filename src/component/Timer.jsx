import {React,useState,useEffect,useRef} from 'react'

function Timer() {
    const [UserValue, setUserValue] = useState(""); //to catch the value that is passed by user
    const [Timer, setTimer] = useState(0); //to get from what second user what to start
    const [Pause, setPause] = useState(0); //to pause the timer
    const timeState = useRef(0); // used as a refference 

    //Func to update the value given in input field by user
    const updateValue=(value)=>{
      setUserValue(value);
  }

    //func to start the timer
    const startTimer = () =>{
      setTimer(UserValue);
    }

    //func to update the value of timer in between the running of timer
    const updateTimer = (value) =>{
      setTimer(value);
    }

    // func to pause the timer 
    const pauseTimer =() =>{
      setPause(Timer);
      clearTimeout(timeState.current);
    }

    //func to resume timer
    const resumeTimer =() =>{
      setTimer(Pause); //passing the paused value 
      timeState.current = setTimeout(()=>{  //using timestate as a refference to do changes in timer 
        //functional condition for resumed timer  
        if (Timer>0){
          updateTimer(Timer-1);
        }
        else if(Timer===0){
          clearTimeout(timeState.current);
        }
      },1000);
    }

     //func to reset timer
    const resetTimer =() =>{
      clearTimeout(timeState.current)
      setTimer(0);
      
    }
  //using useEffect to perform the changes on Timer  
  useEffect(() => {
    
  timeState.current = setTimeout(()=>{
    if (Timer>0){
      updateTimer(Timer-1);
    }
    else if(Timer===0){
      clearTimeout(timeState.current);
    }
  },1000);
    
  }, [Timer]);
  
  return (
    <div>
      <h1>
        Timer
      </h1>
        <input type="text" onChange={(e)=>{
          updateValue(e.target.value);
        }} placeholder='Enter the seconds' />
        <h1>{Timer}</h1>
        <span>
        <button type='Button' onClick={()=>
        {startTimer();}}>Start Timer</button>
        </span> &nbsp;
        <span>
        <button type='Button' onClick={()=>
        {pauseTimer();}}>Pause</button>
        </span> &nbsp;
        <span>
        <button type='Button' onClick={()=>
        {resumeTimer();}}>Resume Timer</button>
        </span> &nbsp;
        <span>
        <button type='Button' onClick={()=>
        {resetTimer();}}>Reset Timer</button>
        </span>

    </div>
  )
}

export default Timer;