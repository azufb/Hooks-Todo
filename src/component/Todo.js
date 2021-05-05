import React, { useContext, useEffect, useState } from "react";
import { DELETE_TODO, COMPLETED_TODO, EDITED_TODO } from "../actions";
import AppContext from "../contexts/AppContext";

const Todo = ({ todo }) => {
    const { state, dispatch } = useContext(AppContext);
    const [content, setContent] = useState("");
    const [editable, setEditable] = useState(false);
    const [title, setTitle] = useState(todo.title);
    // const title = todo.title;
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

    const handleEditable = () => {
        setEditable(!editable);
    };

    const edited = () => {
        dispatch({
            type: EDITED_TODO,
            title,
            id
        });

        setTitle(title);
        todo.title = title;
    }

    return (
        <div>
            {
                editable ? ( // editableが、trueであれば、編集用フォームを表示。
                    <>
                        <input id="formTodos" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <button onClick={edited}>保存</button>
                        <button type="submit"  onClick={handleEditable}>
                            とじる
                        </button>
                    </>
                    
                ) : (　// editableが、falseであれば、タスク名を表示。
                    <>
                        <a href="#" className="list-group-item list-group-item-action">{todo.title}</a>
                        <button onClick={handleEditable}>
                            編集
                        </button>
                    </>
                )
            }
            
            <button type="button" className="btn btn-danger" onClick={deleteTodo}>削除</button>
            <button type="button" className="btn btn-success" onClick={completeTodo}>完了</button>
        </div>
    )
}

export default Todo;