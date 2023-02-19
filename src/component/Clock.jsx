import React, { useEffect } from 'react';
import { useState } from 'react';
import './Clock.css';

function Clock() {
    let time = new Date().toLocaleTimeString();

    const [currentTime, setcurrentTime] = useState(time);

    const ctime =()=>{
        let time = new Date().toLocaleTimeString();
        setcurrentTime(time);
        console.log("Checking");
        
    }
    useEffect(() => {
        setInterval(ctime,1000);
    }, [])
    

    
  return <h1>{currentTime}</h1>
}

export default Clock;