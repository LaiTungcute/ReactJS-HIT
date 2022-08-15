import React from "react";
import "./Todo.scss";

const Todo = (props) => {
  const {todoItem, handleDeleteTodo, id, handleChangeStatus, handleChangeTodo, change, handleActiveChangeTodo} = props;
  return (
    <div className={`todo ${todoItem.completed ? 'todo-active' : ''}`}>
      {/* <div className="todo_title">{todoItem.title}</div> */}
      <input type="text" className="todo_title" readOnly={change} value={todoItem.title} onChange={(e) => handleChangeTodo(e,id)}/>
      <div className="todo_icon">
        <div className="todo_icon-change" onClick={() => handleActiveChangeTodo(id)}>
          {change ? (
            <i class="fa-solid fa-pen"></i>
          ) :(
            <i class="fa-solid fa-rotate-left"></i>
          )}
        </div>
        <div className="todo_icon-checked" onClick={() => handleChangeStatus(id)}>
          {
            todoItem.completed ? (<i class="fa-solid fa-rotate-left"></i>) : (<i className="fa-solid fa-check"></i>)
          }
        </div>
        <div className="todo_icon-clear" onClick={() => handleDeleteTodo(id)}>
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
    </div>
  );
};

export default Todo;
