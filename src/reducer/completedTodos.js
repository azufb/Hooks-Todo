import { COMPLETED_TODO, NON_VISIBLE_TODO } from "../actions";

const completedTodos = (state = [], action) => {
    switch (action.type) {
        case COMPLETED_TODO:
            const completedTodo = {content: action.content}
            //const length = state.length;
            return [...state, { ...completedTodo}];
        
        case NON_VISIBLE_TODO:
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
}

export default completedTodos;