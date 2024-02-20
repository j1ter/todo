import TaskItem from "./TaskItem";

export default function TaskList(props) {
    const handleDelete = (id) => {
      props.onDelete(id);
    }
  
    const handleCompletion = (id) => {
      props.onCompletion(id)
    }
  
    return (
      <div className="task-list">
        {props.arrays.map(task => (
          <div className="task-item" key={task.id}>
            <input 
              type="checkbox" 
              checked={task.completed}
              onChange={() => handleCompletion(task.id)}
            />
            <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.name}</p>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  }