import { useContext } from "react";
import AppContext from "../contexts/AppContext";
import CompletedTodo from "./CompletedTodo";
import { DELETE_COMPLETED_TODOS } from "../actions";

const CompletedTodos = () => {
    const { state, dispatch } = useContext(AppContext);

    const deleteCompletedTodos = () => {
        dispatch({
            type: DELETE_COMPLETED_TODOS
        })
    }
    return (
        <div>
            <h3>完了</h3>
            <button type="button" className="btn btn-danger" onClick={deleteCompletedTodos}>削除</button>
            <div className="list-group">
                {
                    state.completedTodos.map((completedTodo, index) => <CompletedTodo key={index} completedTodo={completedTodo} />)
                }
            </div>
        </div>
    )
}

export default CompletedTodos;