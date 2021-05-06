import { ADD_TODO, DELETE_TODO, EDITED_TODO } from "../actions";

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            // 追加するタスクを1つのオブジェクトにする。
            const todo = {title: action.title}
            // 区別するために、idを付与したいので、まずは、配列の長さを求める。
            const length = state.length
            /* 
            配列の長さが0、つまり、リストに何もなければ、1を付与。
            配列の長さが0以外、つまり、すでにリストの中に何か入っている場合、インデックス番号が、配列の長さ-1の要素が持つidに、+1する。
            */
            const id = length === 0 ? 1 : state[length - 1].id + 1

            // 元の配列＋追加されたタスクを表示させたい。
            // 元の配列は、スプレッド構文で展開。
            return [...state, { id, ...todo }];

        case DELETE_TODO:
            // 削除したいタスクのid(action.id)と一致しない(!==)タスクたちで新たに配列を作る。
            return state.filter(todo => todo.id !== action.id);
        
        case EDITED_TODO:
            const newTodo = {id: action.id, title: action.title}
            state.splice((action.id-1), 1, {...newTodo});
            return state;

        default:
            return state;
    }
}

export default todos;