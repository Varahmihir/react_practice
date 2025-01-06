import React, { useState, useEffect } from 'react';
import './Style.css';

export default function TrafficLight({trafficStates}) {
   

    const [currentColor, setCurrentColor] = useState("green");

    useEffect(() => {
        const { duration, next } = trafficStates[currentColor];
        const timerId = setTimeout(() => {
            setCurrentColor(next);
        }, duration);

        return () => clearTimeout(timerId); // necessaory Cleanup the timeout on component unmount
    }, [currentColor]);

    return (
      <>
        <div className='traff-cont'>
            {Object.keys(trafficStates).map((color, index) => (
                <div
                    key={index}
                    className='traffic-light'
                    style={{
                        backgroundColor: color === currentColor ? trafficStates[color].backgroundColor : "gray",
                        boxShadow: color === currentColor ? trafficStates[color].boxShadow : "none"
                    }}
                ></div>
            ))}
        </div>
            <div className='pole'></div>
        </>
    );
}
