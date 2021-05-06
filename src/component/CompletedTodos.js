import { useContext } from "react";
import AppContext from "../contexts/AppContext";
import CompletedTodo from "./CompletedTodo";
import { DELETE_COMPLETED_TODOS } from "../actions";

const CompletedTodos = () => {
    const { state, dispatch } = useContext(AppContext);


    const deleteCompletedTodos = () => {
        const confirmed = window.confirm("完了したタスクたちを全て削除しても良いですか？");

        if (confirmed) {
            dispatch({
                type: DELETE_COMPLETED_TODOS
            });
        }
    }

    const disableDeleteCompleted = state.completedTodos.length === 0;


    return (
        <div>
            <h3>完了！</h3>
            <button type="button" className="btn btn-danger mb-3" onClick={deleteCompletedTodos} disabled={disableDeleteCompleted}>完了したタスクたちを削除</button>
            <div className="list-group">
                {
                    state.completedTodos.map((completedTodo, index) => <CompletedTodo key={index} completedTodo={completedTodo} />)
                }
            </div>
        </div>
    )
}

export default CompletedTodos;