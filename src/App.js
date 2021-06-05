import './App.css';
import React ,{Component} from 'react'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       todoList:[]
    }
  }
  handleSubmit=(event)=>{
    var TodoDesc=event.target.todoTask.value;
    if(TodoDesc.length>0){
      this.setState({
        todoList:[...this.state.todoList,TodoDesc]
      })
      event.target.reset();

    }
    event.preventDefault();
  }
  deleteTask=(event,index)=>{
    var taskArray=[...this.state.todoList];
    taskArray.splice(index,1);
    this.setState({
      todoList:taskArray
    })
 }
 
  
  render(){
  return (
    <div>
<div className="jumbotron jumbotron-fluid py-2">
  <div className="container">
    <h1 className="display-2">Todo App</h1>
  </div>
</div>
<form className="mb-3" onSubmit={this.handleSubmit}>
  <div className="input-group"> 
   <input type="text" className="form-control" name="todoTask" placeholder="please enter the task" autoComplete="off"/>
  <div className="input-group-append">
  <button className="btn btn-primary" type="submit" id="button-addon2" >Add Task</button>

  </div>
  </div>
</form>
<ul className="list-group">
  {
    this.state.todoList.map(
      (item,index)=>{
        return(
          <li className="list-group-item" key={index}>{item}
          <button className="btn btn-sm btn btn-outline-danger float-right" onClick={this.deleteTask}>Delete</button>
          </li>
        )
      }
    )
  }

</ul>
</div>
  );
  }
}

export default App;
