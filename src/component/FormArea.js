import { useContext, useState } from "react";
import { ADD_TODO } from "../actions"
import AppContext from "../contexts/AppContext";

const FormArea = () => {
    const { dispatch } = useContext(AppContext);
    const [title, setTitle] = useState("");

    const addTodo = e => {
        e.preventDefault();
    
        dispatch({
          type: ADD_TODO,
          title
        });
    
        // 追加されたら、入力フォーム内は空欄にする。
        setTitle("");
      }
    
    return (
        <form>
          <div className="form-group">
            <label htmlFor="formTodos">タスク：</label>
            <input id="formTodos" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
            <div>
              <button type="button" className="btn btn-primary" onClick={addTodo}>タスク登録</button>
            </div>
          </div>
        </form>
    );
}

export default FormArea;