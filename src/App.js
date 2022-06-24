import React, { useState} from 'react';
import './App.css';
// import { todoStore } from './TodoApp/store/todoStore';
import  ReactRouter  from "./react-router/ReactRouter";
// import RouterDemo from "./router/RouterDemo";
// import { Provider } from 'react-redux';

// import { TodoApp } from './TodoApp/TodoApp';



// export function App() {
//   return (
//     <div>
//       <Provider store ={todoStore}>
//         <TodoApp />
//       </Provider>
//     </div>
//   )
// }



// function App() {
//   return (
  
//     <div>
//       <RouterDemo/>
//     </div>
//   )
// }


export const TodoRouterContext = React.createContext([])

function App() {
  const [todoList, setTodoList] = useState([])
  const [search, setSearch] = useState([])
    return (
        <TodoRouterContext.Provider value={{
          todoList: todoList,
          updateTodoList: setTodoList,
          search,
          setSearch
          }}>
          <div className="app">
                <ReactRouter/>    
          </div>
        </TodoRouterContext.Provider>
  );
}

export default App;