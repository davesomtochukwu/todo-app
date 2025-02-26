import { useState, useEffect } from "react";
import Parse from "parse/dist/parse.min.js";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const Task = Parse.Object.extend("Task");
      const query = new Parse.Query(Task);
      const results = await query.find();
      setTasks(results.map((task) => ({ id: task.id, ...task.toJSON() })));
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <TaskForm fetchTasks={fetchTasks} />
      <TaskList tasks={tasks} fetchTasks={fetchTasks} />
    </div>
  );
}

export default App;
