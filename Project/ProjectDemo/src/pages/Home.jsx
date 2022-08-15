import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddToDo from "../components/add-to-do/AddToDo";
import Todo from "../components/todo/Todo";
import "./Home.scss";

const Home = () => {
  const [todo, setTodo] = useState({
    title: "",
    completed: false,
  });
  const [listTodo, setListTodo] = useState([]);
  const [change, setChange] = useState(true);
  const elementInput = useRef(null);
  // const navigate = useNavigate();

  const handleAddTodo = (e) => {
    if (e.keyCode === 13) {
      const arr = [...listTodo];
      arr.push(todo);
      setListTodo(arr);
      setTodo({
        title: "",
        completed: false,
      });
      elementInput.current.focus();
    }
  };

  const handleDeleteTodo = (inx) => {
    const arrUpdate = [...listTodo];
    arrUpdate.splice(inx, 1);
    setListTodo(arrUpdate);
  };

  const handleChangeStatus = (id) => {
    const arrUpdate = [...listTodo];
    arrUpdate &&
      arrUpdate.map((item, inx) => {
        if (inx === id) {
          return (item.completed = !item.completed);
        }
        return item;
      });
    setListTodo(arrUpdate);
  };
  console.log(listTodo);

  const handleDeleteAll = () => {
    const listUpdate = listTodo.filter((item) => item.completed === false);
    setListTodo(listUpdate);
  };

  // const handleLogOut = () => {
  //   localStorage.setItem("isLogin", false);
  //   const isLogin = localStorage.getItem("isLogin");
  //   if (isLogin === "false") {
  //     navigate("/Login");
  //     localStorage.removeItem("accessToken");
  //     window.history.replaceState({}, "/");
  //   }
  // };

  const handleActiveChangeTodo = (id) => {
    setChange(!change);
  }

  const handleChangeTodo = (e, id) => {
    const arrUpdate = [...listTodo];
    arrUpdate && arrUpdate.map((item, ind) => {
      if(ind===id) {
        return item.title = e.target.value;
      }
      return item;
    })
    setListTodo(arrUpdate);
  }

  console.log(listTodo);

  return (
    <div className="flex items-center justify-center h-full py-10">
      <div className="modal-todo h-full">
        <header className="modal-todo_heading">To Do List</header>
        <AddToDo
          ref={elementInput}
          todo={todo}
          setTodo={setTodo}
          handleAddTodo={handleAddTodo}
        />
        <div className="modal-todo_list">
          {listTodo &&
            listTodo.map((item, index) => (
              <Todo
                key={index}
                id={index}
                todoItem={item}
                handleDeleteTodo={handleDeleteTodo}
                handleChangeStatus={handleChangeStatus}
                handleActiveChangeTodo ={handleActiveChangeTodo}
                handleChangeTodo = {handleChangeTodo}
                change = {change}
              />
            ))}
        </div>

        <div className="modal-todo_btn">
          <button className="modal-todo_btn-filter-checked">
            Filter Checked
          </button>

          <button className="modal-todo_btn-filter-checked">
            Filter not Checked
          </button>

          <button
            className="modal-todo_btn-filter-checked"
            onClick={handleDeleteAll}
          >
            Delete all check
          </button>

          {/* <button onClick={handleLogOut}>Logout</button> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
