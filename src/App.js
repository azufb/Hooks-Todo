import "bootstrap/dist/css/bootstrap.min.css";
import TitleArea from "./component/TitleArea";
import { useReducer} from "react";
import reducer from "./reducer";
import FormArea from "./component/FormArea";
import TodoListArea from "./component/TodoListArea";
import AppContext from "./contexts/AppContext";
import CompletedTodos from "./component/CompletedTodos";

const App = () => {
  const initialState = {
    todos: [],
    completedTodos: []
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    /* プロバイダーからvalueを渡す。*/
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container">
        <TitleArea />
        <FormArea />
        <TodoListArea />
        <CompletedTodos />
      </div>
    </AppContext.Provider>
  );
}

export default App;
