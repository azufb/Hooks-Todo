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

            <table class="table">
                            {
                                editable ? ( // editableが、trueであれば、編集用フォームを表示。
                                <>
                                    <thead>
                                        <tr>
                                            <th scope="col">内容</th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="table-success">
                                        <td class="table-success" scope="row"><input id="formTodos" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} /></td>
                                        <td class="table-success"><button type="button" className="btn btn-primary" onClick={edited}>保存</button></td>
                                        <td class="table-success"><button type="submit" className="btn btn-primary" onClick={handleEditable}>
                                            とじる
                                        </button></td>
                                        <td><button type="button" className="btn btn-danger" onClick={deleteTodo}>削除</button></td>
                                        <td><button type="button" className="btn btn-success" onClick={completeTodo}>完了</button></td>
                                        </tr>
                                    </tbody>
                                </>
                                    
                                ) : (　// editableが、falseであれば、タスク名を表示。
                                <>
                                    <thead>
                                        <tr>
                                            <th scope="col">内容</th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="table-success">
                                        <td class="table-success" scope="row">{todo.title}</td>
                                        <td class="table-success"><button type="button" className="btn btn-primary" onClick={handleEditable}>
                                            編集
                                        </button></td>
                                        <td class="table-success"><button type="button" className="btn btn-danger" onClick={deleteTodo}>削除</button></td>
                                        <td class="table-success"><button type="button" className="btn btn-success" onClick={completeTodo}>完了</button></td>
                                        </tr>
                                    </tbody>
                                </>
                                    
                                )
                            }
            </table>
        </div>
    )
}

export default Todo;