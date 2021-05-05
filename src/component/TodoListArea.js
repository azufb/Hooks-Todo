import { useContext } from "react";
import AppContext from "../contexts/AppContext";
import Todo from "./Todo"

const TodoListArea = () => {
    const { state } = useContext(AppContext);
    //const [title, setTitle] = useState("");
    
    return (
        <div>
            <h3>リスト</h3>
            <div className="list-group">
                {
                    state.todos.map((todo, index) => (<Todo key={index} todo={todo} />))
                }
            </div>
        </div>
    );
}

export default TodoListArea;