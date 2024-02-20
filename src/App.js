import {useEffect, useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';

function App() {
  const arrays = [
    {id: 1, name: 'first', completed: true},
    {id: 2, name: 'second', completed: false},
    {id: 3, name: 'third', completed: false},

  ]

  const [inputVal, setInputVal] = useState('')
  const [items, setItems] = useState(arrays)

  useEffect(() => {
    const storedTask = JSON.parse(localStorage.getItem('tasks'));

    if(storedTask) {
      setItems(storedTask)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(items))
  }, [items])

  const addItem =() =>{
    if(!inputVal){
      alert("Item is empty!")
      return
    }
    const item = {
      id: uuidv4(),
      name: inputVal,
      completed: false
    }

    setItems((oldItems) => [...oldItems, item])
    console.log(item)

    setInputVal('')
  }

  const deleteItem = (id) => {
    setItems(oldItems => oldItems.filter(item => item.id !== id));
  }

  const completedItem = (id) => {
    setItems((oldItems) => oldItems.map((item)  => item.id === id ? {...item, completed: !item.completed} : item));
  };

  return (
    <div className='container'> 
      <h1>TO DO LIST</h1>
      
      <AddTaskForm 
      inputVal = {inputVal}
      addItem = {addItem}
      setInputVal = {setInputVal}
      />
      <TaskList arrays={items} 
      onDelete={deleteItem}
      onCompletion={completedItem}
      
      />

    </div>
  );
}

export default App;
