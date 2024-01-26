import {useState} from 'react'
const Todo = ({text, isFinished, deleteTodo, editTodo, finishTodo}) => { 

  const [isEditing, setIsEditing] = useState(false)
  const [todoText, setTodoText] = useState(text) 
    
    return (
      <div>
        <input type="checkbox" checked={isFinished} onChange={() => finishTodo(!isFinished)} />
        {isEditing ? <input onChange={(e) => setTodoText(e.target.value)} value={todoText}/> : <span>{todoText}</span>}

        <button onClick={() => {
          setIsEditing(!isEditing)
          editTodo(todoText)
        }}>{isEditing ? "Save" : "Edit"}</button>
        <button onClick={() => deleteTodo()}>Delete</button>
      </div>
    );
} 

export default Todo;