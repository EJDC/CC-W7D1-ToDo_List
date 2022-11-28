import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
      { name: "Buy shopping", priority: "high" },
      { name: "Clean bathroom", priority: "low" },
      { name: "Car's MOT", priority: "high" }
  ])

  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("");

  const taskNodes = tasks.map((task, index) => {
    return (
      <li key={index} className={task.priority === "high" ? "high" : "low"}>
        <span>{task.name}</span>
        {task.priority === "high" ? <span className="high">High</span> : <span className="low">Low</span>}
      </li>
    )
  })

  const handleInputChange = (event) => {
    setNewTask(event.target.value)
  }

  const saveNewTask = (event) => {
    event.preventDefault();
    // to test console.log(event.target.priority.value)
    const newTaskList = [...tasks]
    newTaskList.push({name: newTask, priority: priority})
    // newTaskList.push({name: newTask, priority: event.target.priority.value})
    setTasks(newTaskList);
    setNewTask("")
  }

  const handlePriorityClick = (priorityStr) => {
    setPriority(priorityStr);
  }

  return (
    <div className="App">

    <h1>ToDo List</h1>
    <hr></hr>

    <form onSubmit={saveNewTask}>
      <label htmlFor="new-task"> Add New Task</label>
      <input type = "text" id="new-task" value={newTask} onChange= {handleInputChange}></input>
      <label htmlFor = "priority">High</label>
      <input type = "radio" name="priority" value="high" onClick={() => handlePriorityClick("high")}></input>
      <label htmlFor = "priority">Low</label>
      <input type = "radio" name="priority" value="low" onClick={() => handlePriorityClick("low")}></input>
      <input type = "submit" value="Save new task"></input>
    </form>

    <ul>
      {taskNodes}
    </ul>

  </div>
);
}

export default App;
