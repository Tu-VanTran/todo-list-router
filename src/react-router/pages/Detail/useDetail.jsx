import { useContext } from "react";
import {  useNavigate } from "react-router";
import { TodoRouterContext } from "../../../App";
import  TODO_LIST_ITEM  from "../../ReactRouter";

const  useDetail =()=> {
    const { todoList, updateTodoList} = useContext(TodoRouterContext)
    const Navigate = useNavigate()

    const updateTaskItem = (taskItem) => {
        const updateItem = todoList.map((item) =>{
            if( item.id === taskItem.id) {
                return {
                    ...item,...taskItem
                }
            }
            return item
        })
        updateTodoList(updateItem)
        localStorage.setItem(TODO_LIST_ITEM,JSON.stringify(updateItem))
        Navigate(`/all-task`);
    }

    const deleteTaskItem = (idItem) => {
        const deleteTask = todoList.filter( item => item.id !== idItem);
        updateTodoList(deleteTask);
        localStorage.setItem(TODO_LIST_ITEM,JSON.stringify(deleteTask));
        Navigate(`/all-task`);
    }

    return [updateTaskItem, deleteTaskItem]
}
export default useDetail