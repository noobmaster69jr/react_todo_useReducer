import {useReducer} from 'react'
import TodoList from './Components/TodoList'
import AddTodo from './Components/AddTodo' 
import TodoContext  from './context/TodoContext'
import TodoReducer from './Reducer/TodoReducer'

const App = () => {

   const [todos, dispatch] = useReducer(TodoReducer, [])

    return (
      <>
        <TodoContext.Provider value={{todos, dispatch}}>
          <AddTodo />
          <TodoList  />
        </TodoContext.Provider>
      </>
    );
} 

export default App;