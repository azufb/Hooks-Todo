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


    const deleteTodo = () => {
        const confirmed = window.confirm("このタスクを削除しても良いですか？");

        if (confirmed) {
            const finalAnswer = window.confirm("このまま先延ばしにして良いのですか？");

            

            if (finalAnswer) {
                dispatch({
                    type: DELETE_TODO,
                    id
                });
            } else {
                window.alert("良い心がけですね。あとちょっと一緒に頑張ってみましょう！");
            }
        }
    }

    const completeTodo = () => {
        dispatch({
            type: COMPLETED_TODO,
            content
        });

        dispatch({
            type: DELETE_TODO,
            id
        });
    }

    useEffect(() => {
        setContent(todo.title);
    }, [todo.title]);

    const handleEditable = () => {
        setEditable(!editable);
    };

    const edited = () => {
        dispatch({
            type: EDITED_TODO,
            title,
            id
        });

        todo.title = title;

        console.log(state);
        localStorage.setItem("items", JSON.stringify(state));
    }

    return (
        <div className="mb-3">
            {
                editable ? ( // editableが、trueであれば、編集用フォームを表示。
                <>
                    <input id="formTodos" className="form-control mb-1" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <button type="button" className="btn btn-primary" onClick={edited}>保存</button>
                    <button type="submit" className="btn btn-primary mx-1" onClick={handleEditable}>とじる</button>
                </>
                    
                ) : (　// editableが、falseであれば、タスク名を表示。
                <>
                    <a href="#" className="list-group-item list-group-item-action mb-1 rounded">{todo.title}</a>
                    <button type="button" className="btn btn-primary" onClick={handleEditable}>編集</button>
                    <button type="button" className="btn btn-danger mx-1" onClick={deleteTodo}>削除</button>
                    <button type="button" className="btn btn-success" onClick={completeTodo}>完了</button>
                </>
                    
                )
            }
        </div>
    )
}

export default Todo;