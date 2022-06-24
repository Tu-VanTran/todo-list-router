import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CreateNewTask.css";
import useCreate from "./useCreate";




function CreateNewTask() {
    const  addTodoItem  = useCreate()
    
    const [newTodoValue, setNewTodoValue] = useState({
        title: "",
        creator: "",
        at: "",
        description: "",
        option: "New"
    })
    const handleNewTodoValue = (e) => {
        const value = e.target.value;
        setNewTodoValue({...newTodoValue, [e.target.name] :value});
    }
    const handleSubmitNewTodoValue = () => {
        addTodoItem(newTodoValue)
        setNewTodoValue({});
    }

    console.log("newtodolist",newTodoValue)
    
    return (
        <div className="create-new-task">
            <div className="create-form">
                <div className="label-input">
                    <p className="label-input">
                        <label>Title</label>
                        <input type= "text"name="title" value = {newTodoValue.title}
                        onChange = {handleNewTodoValue} placeholder="Title" />
                    </p>                   
                    <p className="label-input">
                        <label>Creator</label>
                        <input type= "text"name="creator" value = {newTodoValue.creator}
                        onChange = {handleNewTodoValue} placeholder="Creator" />
                    </p>                   
                    <p className="label-input">
                        <label>Created at</label>
                        <input type= "text"name="at" value = {newTodoValue.at}
                        onChange = {handleNewTodoValue} placeholder="Created at" />
                    </p>                   
                    <p className="label-input">
                        <label>Description</label>
                        <input type= "text"name="description" value = {newTodoValue.description}
                        onChange = {handleNewTodoValue} placeholder="Description" />
                    </p>                   
                </div>

                <Link className="button-create" to="/all-task">
                    <button onClick={handleSubmitNewTodoValue}>Save</button>
                </Link>
            </div>
        </div>
    )
}

export default CreateNewTask;