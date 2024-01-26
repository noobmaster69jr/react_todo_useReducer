import {useState, useContext} from 'react'
import TodoContext from '../context/TodoContext'

const AddTodo = ({addTodos}) => { 
    const { todos, dispatch } = useContext(TodoContext);
    const [todoText, setTodoText] = useState('')
    
    function addTodos(todoText) {
        let nextId = todos.length + 1;
        dispatch({type:'add_todo', payload: {todoText}})
    }
    return (<>
        <input type="text" placeholder="add next todo..." value={todoText} onChange={(e) => setTodoText(e.target.value)} /> 
        <button onClick={() => { 
            addTodos(todoText);
            setTodoText('')
         }
        }> Submit </button>
    </>)
} 

export default AddTodo