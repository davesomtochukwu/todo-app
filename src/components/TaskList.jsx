import TaskItem from "./TaskItem";

function TaskList({ tasks, fetchTasks }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} fetchTasks={fetchTasks} />
        ))
      )}
    </div>
  );
}

export default TaskList;
