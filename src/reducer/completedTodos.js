import { COMPLETED_TODO, NON_VISIBLE_TODO, DELETE_COMPLETED_TODOS } from "../actions";

const completedTodos = (state = [], action) => {
    switch (action.type) {
        case COMPLETED_TODO:
            const completedTodo = {content: action.content}
            return [...state, { ...completedTodo}];
        
        case NON_VISIBLE_TODO:
            return state.filter(todo => todo.id !== action.id);
        
        case DELETE_COMPLETED_TODOS:
            return [];
        default:
            return state;
    }
}

export default completedTodos;