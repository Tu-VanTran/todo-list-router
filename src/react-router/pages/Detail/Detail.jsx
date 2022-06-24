
import React, { useContext, useState } from "react";
import "./Detail.css";
import { Link, useParams } from "react-router-dom";
import { TodoRouterContext } from "../../../App";
import useDetail from "./useDetail";
 


function Detail() {
    const {todoList, updateTodoList} = useContext(TodoRouterContext)
    const [updateTaskItem, deleteTaskItem] = useDetail()
    
    const [update, setUpdate] = useState({
        title:"",
        creator: "",
        at: "",
        description: "",
        option: ""
    })
    
    const hanleOnchangeValue = (e) => {
        const newValue = e.target.value;
        setUpdate({...update, [e.target.name]: newValue})
    }
     
    const navParam = useParams();
    const indexItem = todoList.findIndex(item => item.id === navParam.id);
    const list = todoList[indexItem];
    

    const hanldeUpdateSave = (e) => {
        updateTaskItem({id:navParam.id, ...update})
        setUpdate({})
    }

    const reset = () => {
        setUpdate({
            title:"",
            creator: "",
            at: "",
            description: "",
            option: ""
        })
    }
    return (
        <div className="create-detail">
            <div className="detail-form">
                <div className="detail-lable-input">
                    <p className="label-input">
                        <label>Title:</label>
                        <input placeholder={list.title} name = "title"
                        defaultValue = {list.title}  value = {update.title}
                        onChange = {hanleOnchangeValue}/>
                    </p>

                    <p className="label-input">
                        <label>Creator:</label>
                        <input placeholder={list.creator} name = "creator"
                        value = {update.creator} defaultValue = {list.creator}
                        onChange = {hanleOnchangeValue}/>
                    </p>

                    <p className="label-input">
                        <label>Created at:</label>
                        <input placeholder={list.at} name = "at"
                        value = {update.at} defaultValue = {list.at}
                        onChange = {hanleOnchangeValue}/>
                    </p>

                    <p className="label-input">
                        <label>Description:</label>
                        <input placeholder={list.description} name = "description"
                        value = {update.description} defaultValue = {list.description}
                        onChange = {hanleOnchangeValue}/>
                    </p>
                </div>

                <div className="detail-radio">
                    <input type="radio" name="option" value="New" 
                    checked = {update.option === "New"} onChange = {hanleOnchangeValue} />New 

                    <input type="radio" name="option" value="Doing" 
                    checked = {update.option === "Doing"} onChange = {hanleOnchangeValue}/>Doing

                    <input type="radio" name="option" value= "Done" 
                    checked = {update.option === "Done"} onChange = {hanleOnchangeValue}/>Done
                </div>
                               
                <div  className="detail-button">
                    <Link to="/all-task">
                    <button onClick={ hanldeUpdateSave }>Save</button> 
                    </Link>
                    <button onClick={ reset }>Reset</button>
                    <Link to="/all-task">
                    <button onClick={() => {deleteTaskItem(navParam.id)}}>Delete</button>
                    </Link>
                </div> 
                
            </div>    
        </div>
    )
}

export default Detail;

 
 