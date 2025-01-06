import './App.css'
import React from 'react'
import TrafficLight from './TrafficLight'
import trafficStates from './trafficStates';
function App() {

    
  return (
    <div className='wrapper' >
      <TrafficLight trafficStates={trafficStates}/>
    </div>
      
    
  )
}

export default App
