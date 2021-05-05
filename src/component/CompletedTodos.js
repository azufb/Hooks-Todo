import { useContext } from "react";
import AppContext from "../contexts/AppContext";
import CompletedTodo from "./CompletedTodo";

const CompletedTodos = () => {
    const { state } = useContext(AppContext);
    return (
        <div>
            <h3>完了</h3>
            <div className="list-group">
                {
                    state.completedTodos.map((completedTodo, index) => <CompletedTodo key={index} completedTodo={completedTodo} />)
                }
            </div>
        </div>
    )
}

export default CompletedTodos;