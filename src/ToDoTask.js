const ToDoTask = (props) =>{

  return (
    <div className="task" style={{background:props.completed ? "green" : "red"}}>
            <h1>{props.taskName}</h1>
            <button onClick={() => props.completeTask(props.id)}>Complete</button>
            <button onClick={() => props.deletTask(props.id)}>Delete</button>
          </div>);
}

export default ToDoTask;