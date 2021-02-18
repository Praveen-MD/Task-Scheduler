import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import { useState } from "react";
import Addtask from "./Components/Addtask";
// const tasks = [

// ];

function App() {
	const [isShow, setShow] = useState(false);
	const [tasks, setTasks] = useState([
		{
			id: 1,
			task: "Pay electricity bill",
			date: 15022021,
			reminder: true,
		},
		{
			id: 2,
			task: "Pay water bill",
			date: 18022021,
			reminder: false,
		},
		{
			id: 3,
			task: "Pay phone bill",
			date: 10022021,
			reminder: true,
		},
		{
			id: 4,
			task: "Visit super marke",
			date: 11022021,
			reminder: false,
		},
	]);
	const clickHandler = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};
	const addTask = () => {
		setShow(!isShow);
	};
	const addNewTask = (task) => {
		var id = Object.keys(tasks).length+1;	
		const newTask = { id, ...task }
		setTasks([...tasks, newTask])
		
	};
	return (
		<div className="container">
			<Header addTask={addTask} text="Task-Scheduler" color="coral" />
			{isShow ? <Addtask onAdd={addNewTask} /> : null}
			<Tasks onDelete={clickHandler} tasks={tasks} />
		</div>
	);
}

export default App;
