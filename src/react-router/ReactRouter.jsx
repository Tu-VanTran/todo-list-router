import React, { useContext, useEffect } from "react";
import "./ReactRouter.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavSidebar from "./component/NavSidebar";
import { TodoRouterContext } from "../App";

import AllTask from "./pages/AllTask/AllTask";
import CreateNewTask from "./pages/CreateNewTask/CreateNewTask";
import DoingTask from "./pages/DoingTask";
import DoneTask from "./pages/DoneTask";
import NewTask from "./pages/NewTask";
import Detail from  "./pages/Detail/Detail"
import SearchTask from "./pages/Search";

export const TODO_LIST_ITEM = "TASK_ITEM";
function ReactRouter() {
    const  {todoList, updateTodoList }= useContext(TodoRouterContext);

    useEffect(() => {
        const storedTodoList = localStorage.getItem('TASK_ITEM')
        
        if(storedTodoList === null) {
            updateTodoList([])
            return;
        }
        updateTodoList(JSON.parse(storedTodoList));
    }, [])

    return (
        <div className="App-Router">
            <BrowserRouter>
                <NavSidebar />
                <Routes>
                    <Route path="/create-new-task" element= {<CreateNewTask />}/>
                    <Route path="/all-task" element= {<AllTask />}/>
                    <Route path="/detail/:id" element = {<Detail />}/>
                    <Route path="/new-task" element= {<NewTask/>}/>
                    <Route path="/doing-task" element= {<DoingTask/>}/>
                    <Route path="/done-task" element= {<DoneTask/>}/>
                    <Route path="/search-task" element = {<SearchTask/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default ReactRouter;