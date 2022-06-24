import { useContext } from "react";
import { TodoRouterContext } from "../../../App";
import { v4 } from "uuid";
import  TODO_LIST_ITEM  from "../../ReactRouter";

export const useCreate = () => {
    const { todoList, updateTodoList} = useContext(TodoRouterContext);
    

    const addTodoItem = (container) => {
        if (container.title === '' || container.creator ==='' || container.at === "" || container.description === '' || container.option === '') return;
        const newTodoList = [
            {
                id: v4(),
                title:container.title,
                creator: container.creator,
                at: container.at,
                description: container.description,
                option: container.option
            },
            ...todoList,
        ]
        updateTodoList(newTodoList);
        localStorage.setItem(TODO_LIST_ITEM,JSON.stringify(newTodoList));
    }

    
     
    return  addTodoItem;
}

export default useCreate;