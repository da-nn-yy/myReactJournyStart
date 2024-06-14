const ToDoTask = (props) =>{

  return (
    <div>
            <h1>{props.taskName}</h1>
            <button onClick={() => props.deletTask(props.id)}>Delete</button>
          </div>);
}

export default ToDoTask;