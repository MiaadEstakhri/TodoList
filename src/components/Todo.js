const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <div className="todo">
      <div
        onClick={onComplete}
        className={`todoText ${todo.isCompleted ? "completed" : ""}`}
      >
        {todo.text}
      </div>
      <div>
        <button onClick={onEdit} className="btn">
          Edit
        </button>
        <button onClick={onDelete} className="btn remove">
          delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
