import { useState } from "react";
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
  return (

    <div>
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
          <div>
            <h1>{task.taskName}</h1>
            <button onClick={() => deletTask(task.id)}>Delete</button>
          </div>);
        })}
      </div>
    </div>
  )
}

export default ToDo;