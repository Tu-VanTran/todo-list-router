import React, { useContext, useState } from "react";
import "./NavSidebar.css";

import { NavSidebarData } from "./NavSidebarData";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { TodoRouterContext } from "../../App";

function NavSidebar() {
    const  {todoList, updateTodoList, search, setSearch }= useContext(TodoRouterContext);
    const [isOpen, setIsOpen] = useState(false);
    const [searchTask, setSearchTask] = useState('');

    const Navigate = useNavigate();
    const toggle = () => {setIsOpen(!isOpen)}

const hanldeSearch = (content) => {
    const todoListSearch = todoList.filter( item =>{
        return  item.title.toUpperCase().search(content.toUpperCase()) !== -1;
    })
    setSearch(todoListSearch);
    console.log(search)
    Navigate(`/search-task`)
}

    return (
        <div className="nav-bars">
            <nav className="nav-horizontally">
                <Link className="created" to="/create-new-task">Create New Task</Link>

                <input type="search" placeholder="Type Something To Search"
                value={searchTask}
                onChange = {(e)=> {setSearchTask(e.target.value)}}/>

                <Link to="/search-task"><button onClick={() =>hanldeSearch(searchTask)}>Search</button> </Link>           
            </nav>
            <nav className={`nav-vertical ${isOpen ? "hide" : ""} `} >
                <p className="bars" onClick={toggle}><FaBars/></p>
                {NavSidebarData.map((item,index) => {
                    return (
                        <NavLink key={index}to = {item.path} className ="nav-task" 
                        activeClassName = "active">
                            <div className="icon">{item.icon}</div>
                            {!isOpen && <div className="title">{item.title}</div> }   
                        </NavLink>
                            )
                        })
                    }
                {/* <ul className="nav-vertical-ul">
                    {NavSidebarData.map((item,index) => {
                        return (
                            <li key={index} className =   "nav-task" 
                                activeClassName = "active">
                                <navLink to = {item.path}  >
                                    {item.title}
                                </navLink>   
                            </li>
                            )
                        })
                    }
                </ul> */}
            </nav>
        </div>
    )
}

export default NavSidebar;