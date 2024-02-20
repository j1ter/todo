import '../App.css';
export default function TaskItem(props){
    return <div className="task-item">
        <p>{props.array.name}</p>
    </div>
} 