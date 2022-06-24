import React from "react";
import { TodoRouterContext } from "../../App";
import { useContext } from "react";
import { useNavigate } from "react-router";


function NewTask() {
    const  {todoList, updateTodoList }= useContext(TodoRouterContext);
    
    
    const navigate = useNavigate()

    const gotoDetail = (item) => {
        navigate(`/detail/${item.id}`)
    }
    return (
        <div className="new-task">
            {todoList.map((item, index) =>{
                if (item.option === 'New') {
                    return(
                        <div className="all-task-item" onClick = {() => gotoDetail(item) } key= {index}>
                            <p className="title">Title: {item.title}</p>
                            <p>Creator: {item.creator}</p>
                            <p>Created at: {item.at}</p>
                            <p className="status ">Status: <span className={`span ${item.option}`}>{item.option}</span> </p>
                            <p className="des"><span>Description:</span> {item.description}</p>   
                        </div>
                    )}}
            )}

        </div>
    )
}

export default NewTask;