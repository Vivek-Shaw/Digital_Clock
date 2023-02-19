import React,{useState,useEffect} from 'react';



function StopWatch() {
    const [Time, setTime] = useState(0);
    const [TimerOn, setTimerOn] = useState(false);

    useEffect(() => {
      let interval = null;

      if(TimerOn){
        interval = setInterval(() => {
            setTime(prevTime => prevTime +10)
        }, 10)
      }
      else{
        clearInterval(interval)
      }
    
      return () => {
        clearInterval(interval)
      }
    }, [TimerOn])
    
  return (
    <>
    <div>
        <h1>STOPWATCH</h1>
        <span>{("0" + Math.floor((Time/60000)%60)).slice(-2)}:</span> {/* for minute seconds */}
        <span>{("0" + Math.floor((Time/1000)%60)).slice(-2)}:</span>  {/* for seconds seconds */}
        <span>{("0" + ((Time/10)%100)).slice(-2)}</span> {/* for mili seconds */}
        {/*we are using slice, if we put any negative digit then it will reduce to that number 
        for example if we put -2 then if the number is of 3 or 5 digit it will 
  reduce it to 2 digit number */}
    </div>
    <div>
        {!TimerOn && Time === 0 && (
            <button onClick={()=>setTimerOn(true)}>Start</button>
        )}
        {TimerOn && (
            <button onClick={()=>setTimerOn(false)}>Stop</button>
        )}
        {!TimerOn && Time !== 0 && (
            <button onClick={()=>setTimerOn(true)}>Resume</button>
        )} &nbsp;
        {!TimerOn && Time > 0 && (
            <button onClick={()=>setTime(0)}>Reset</button>
        )}
    </div>
    </>
  )
}

export default StopWatch