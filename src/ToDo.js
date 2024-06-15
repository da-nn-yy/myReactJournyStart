import { useState } from "react";
import ToDoTask from './ToDoTask'

const ToDo = () => {
  const [todoList,setTodoList] = useState([]);
  const [newTask, setNewTask] = useState(""); 

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () =>{
    // setTodoList([...todoList,newTask]);
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    }
    setTodoList([...todoList,task])
  }

  const deletTask = (id) => {
    // const newTodoList = todoList.filter((task) => task !== taskName)
    // // const newTodoList = todoList.filter((task) => {
    // //   return task !== taskName;})
    // // const newTodoList = todoList.filter((task) => {
    // //   // if (task === taskName) {
    // //   //   return false 
    // //   //   }else{
    // //   //     return true
    // //   //   }
    // //   }
    // // )
    // setTodoList(newTodoList)
    setTodoList(todoList.filter((task) => task.id !== id))
  };
  
  const completeTask = (id) => {
    setTodoList(todoList.map((task) => {
      if (task.id === id) {
        return {...task,completed:true };
      }else{
      return task };
    }))
  }
  return (

    <div>
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
          <ToDoTask 
          taskName={task.taskName} 
          id={task.id} 
          deletTask={deletTask}
          completeTask={completeTask}
          completed={task.completed}/>
          )
        })}
      </div>
    </div>
  )
}

export default ToDo;