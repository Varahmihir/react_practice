import './App.css'
import React from 'react'
import TrafficLight from './TrafficLight'
import trafficStates from './trafficStates';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EmployeePage from './pages/EmployeePage';
import ProductPage from './pages/ProductPage';
import DynamicForm from './pages/DynamicForm';
import Todo from './components/Todo';
import QuizApp from './components/QuizApp';
function App() {

    
  return (
    <div className='wrapper' >
      {/* <TrafficLight trafficStates={trafficStates}/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/traffic" element={<TrafficLight trafficStates={trafficStates}/>} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/quiz" element={<QuizApp />} />

        <Route path="/employees" element={<EmployeePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/form" element={<DynamicForm />} />

      </Routes>
    </BrowserRouter>
    </div>
      
    
  )
}

export default App
