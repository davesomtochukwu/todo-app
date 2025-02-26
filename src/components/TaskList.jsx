import React from "react";

const TaskList = ({ tasks, onCompleteTask, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{ textDecoration: task.status ? "line-through" : "none" }}
        >
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => onCompleteTask(task.id)}>Complete</button>
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
