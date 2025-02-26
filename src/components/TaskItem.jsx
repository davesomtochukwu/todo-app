import Parse from "parse/dist/parse.min.js";

function TaskItem({ task, fetchTasks }) {
  const handleComplete = async () => {
    try {
      const query = new Parse.Query("Task");
      const taskToUpdate = await query.get(task.id);
      taskToUpdate.set("completed", !task.completed);
      await taskToUpdate.save();
      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const query = new Parse.Query("Task");
      const taskToDelete = await query.get(task.id);
      await taskToDelete.destroy();
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={handleComplete}>
        {task.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TaskItem;
