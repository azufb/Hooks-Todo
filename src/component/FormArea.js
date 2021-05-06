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

    const disableAdding = title === "";
    
    return (
      <div className="pb-3">
        <form>
          <div className="form-group">
            <label htmlFor="formTodos"></label>
            <input id="formTodos" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="今日のやることを入力してください。" />
            <div>
              <button type="button" className="btn btn-primary mt-3" onClick={addTodo} disabled={disableAdding}>タスク登録</button>
            </div>
          </div>
        </form>
      </div>
    );
}

export default FormArea;