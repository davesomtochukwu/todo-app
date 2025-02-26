import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
// import Parse from './config/parseConfig';
import Parse from 'parse';

const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const Task = Parse.Object.extend('Task');
        const query = new Parse.Query(Task);
        const results = await query.find();
        setTasks(results.map(task => ({
            id: task.id,
            title: task.get('title'),
            description: task.get('description'),
            status: task.get('status'),
        })));
    };

    const addTask = async (taskData) => {
        const Task = Parse.Object.extend('Task');
        const newTask = new Task();
        newTask.set('title', taskData.title);
        newTask.set('description', taskData.description);
        newTask.set('status', false);
        await newTask.save();
        fetchTasks();
    };

    const completeTask = async (taskId) => {
        const Task = Parse.Object.extend('Task');
        const query = new Parse.Query(Task);
        const task = await query.get(taskId);
        task.set('status', true);
        await task.save();
        fetchTasks();
    };

    const deleteTask = async (taskId) => {
        const Task = Parse.Object.extend('Task');
        const query = new Parse.Query(Task);
        const task = await query.get(taskId);
        await task.destroy();
        fetchTasks();
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <TaskForm onAddTask={addTask} />
            <TaskList tasks={tasks} onCompleteTask={completeTask} onDeleteTask={deleteTask} />
        </div>
    );
};

export default App;
