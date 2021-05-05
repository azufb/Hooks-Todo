import "bootstrap/dist/css/bootstrap.min.css";
import TitleArea from "./component/TitleArea";
import { useEffect, useReducer } from "react";
import reducer from "./reducer";
import FormArea from "./component/FormArea";
import TodoListArea from "./component/TodoListArea";
import AppContext from "./contexts/AppContext";
import CompletedTodos from "./component/CompletedTodos";

const App = () => {
  //ローカルストレージに保存したデータを取得。
  const localData = localStorage.getItem("items");

  const initialState = localData ? JSON.parse(localData) : {
    todos: [],
    completedTodos: []
  }


  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(state));
  }, [state]);

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
