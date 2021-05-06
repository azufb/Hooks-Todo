import { useContext } from "react";
import AppContext from "../contexts/AppContext";
import Todo from "./Todo"

const TodoListArea = () => {
    const { state } = useContext(AppContext);
    
    return (
        <div className="mb-3 flex-fill w-50 p-3">
            <h3>一覧</h3>
            <div className="list-group">
                {
                    state.todos.map((todo, index) => (<Todo key={index} todo={todo} />))
                }
            </div>
        </div>
    );
}

export default TodoListArea;