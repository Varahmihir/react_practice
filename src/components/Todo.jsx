import React, { useEffect, useState } from 'react'
import '../Style.css';
export default function Todo() {
    const [todos,setTodos]= useState(['WORK']);
    const [completed,setCompleted]= useState(['FOOD']);
    const[selected,setSelected]=useState([]);
    const handleAddTodo=()=>{
        const t = document.getElementById('todo').value
        setTodos([...todos,t]);
        document.getElementById('todo').value='';
        console.log(todos)

    }
    const handleSelect=(todo)=>{
        if (selected.includes(todo)) {
            setSelected(selected.filter(item => item !== todo));
          } else {
            setSelected([...selected, todo]);
          }
    }
    const handleCompleted=()=>{
        setCompleted([...completed,...selected]);
        setTodos(todos.filter(todo=>!selected.includes(todo)));
        setSelected([])

    }
// useEffect(()=>{
//     setSelected([])
// },todos)
  return (
    <div >
<input type='text' id='todo' placeholder='add your todo'/>
<button onClick={handleAddTodo}>add todo</button>
<button onClick={handleCompleted}>completed</button>
      <div className='todolist'>
          <ul>
        {todos.map((todo,index)=>
            
            <li key={index} onClick={()=>handleSelect(todo)}
            style={{ cursor: 'pointer', textDecoration: selected.includes(todo) ? 'line-through' : 'none' ,color:selected.includes(todo)?'green':'red'}}
            >
              {todo}</li>
        )}
        </ul>
      </div>
      <div className='comp'>
          <ul>
        {completed.map((task,index)=>
            <li key={index}>{task}</li>
        )}
        </ul>
      </div>
    </div>
  )
}
