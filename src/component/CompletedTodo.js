const CompletedTodo = ({ completedTodo }) => {
    return (
        <a href="#" className="list-group-item list-group-item-action list-group-item-success">{completedTodo.content}</a>
    )
}

export default CompletedTodo;