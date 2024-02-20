import '../App.css';
export default function AddTaskForm(props){

    const handleInputChange = (e) => {
        props.setInputVal(e.target.value);
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        props.addItem();
      }
    return (
    <div className="add-task-form">
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Add" 
          value={props.inputVal}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
    )
} 