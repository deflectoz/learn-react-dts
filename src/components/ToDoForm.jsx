import React from "react";
import { useState } from "react";

const ToDoForm = ({ handleClick }) => {
    const [todo, setTodo] = useState("");

    return (
        <div className="todo-form">
            <p>~ Today To Do List ~</p>
            <span>
                <input value={todo} onChange={(e) => {
                    setTodo(e.target.value);
                }} />
                <button onClick={() => handleClick(todo)}>Submit</button>
            </span>
        </div>
    );
};

export default ToDoForm;