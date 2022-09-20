import { useEffect, useRef, useState } from "react";

const TodoForm = ({ edit, submitTodo }) => {
  const [input, setInput] = useState(edit ? edit.text : "");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("enter todo !");
      return;
    }
    submitTodo(input);
    setInput("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="formControl ">
        <input
          type="text"
          value={input}
          onChange={changeHandler}
          placeholder="Add new value"
          ref={inputRef}
        />
        <button
          type="submit"
          className={`btn ${edit ? "editTodo" : "addTodo"}`}
        >
          {edit ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
