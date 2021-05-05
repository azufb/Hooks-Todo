import React, { useContext, useEffect, useState } from "react";
import { DELETE_TODO, COMPLETED_TODO, NON_VISIBLE_TODO } from "../actions";
import AppContext from "../contexts/AppContext";

const Todo = ({ todo }) => {
    const { dispatch } = useContext(AppContext);
    const [content, setContent] = useState("");
    const title = todo.title;
    const id = todo.id;

    useEffect(() => {
        setContent(title);
    }, [title]);

    const deleteTodo = () => {
        dispatch({
            type: DELETE_TODO,
            id
        });
    }

    const completeTodo = () => {
        console.log(todo.title);
        dispatch({
            type: COMPLETED_TODO,
            content
        });

        dispatch({
            type: DELETE_TODO,
            id
        });

        todo.title = "";
    }

    return (
        <div>
            <a href="#" className="list-group-item list-group-item-action">{todo.title}</a>
            <button type="button" className="btn btn-danger" onClick={deleteTodo}>削除</button>
            <button type="button" className="btn btn-success" onClick={completeTodo}>完了</button>
        </div>
    )
}

export default Todo;