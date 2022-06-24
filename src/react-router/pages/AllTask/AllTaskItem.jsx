import React from "react";
import "./AllTask.css"
import { useNavigate } from "react-router";



function AllTaskItem(props) {
    const navigate = useNavigate()

    const gotoDetail = (item) => {
        navigate(`/detail/${item.id}`)
    }
    return (
        <div className="all-task-item" onClick = {() => gotoDetail(props) }>
            <p className="title">Title: {props.title}</p>
            <p>Creator: {props.creator}</p>
            <p>Created at: {props.at}</p>
            <p className="status">Status: {props.option}</p>
            <p className="des"><span>Description:</span> {props.description}</p>   
        </div>
    )
}

export default AllTaskItem;