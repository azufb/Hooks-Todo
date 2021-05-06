const CompletedTodo = ({ completedTodo }) => {
    return (
        <div className="pb-3">
            <a href="#" className="list-group-item list-group-item-action list-group-item-success rounded">{completedTodo.content}</a>
        </div>
    )
}

export default CompletedTodo;