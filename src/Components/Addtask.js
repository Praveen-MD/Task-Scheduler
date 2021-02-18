import { useState } from "react";
const Addtask = ({ onAdd }) => {
	const [task, setTask] = useState("");
	const [date, setDate] = useState("");
	const [isReminder, setReminder] = useState(false);
	const onSubmit = (e) => {
		e.preventDefault();

		if (!task) {
			alert("Please add a task");
			return;
		}

		onAdd({ task, date, isReminder });
		console.log(isReminder);
		setTask("");
		setDate("");
		setReminder(false);
	};

	return (
		<div className="add-form">
			<form className="form-control" onSubmit={onSubmit}>
				<label>Set Task</label>
				<input
					className="form-input"
					type="text"
					value={task}
					placeholder="Add Task "
					onChange={(e) => setTask(e.target.value)}
				/>
				<label> Set Date</label>
				<input
					className="form-input"
					type="text"
					value={date}
					placeholder="Add Date"
					onChange={(e) => setDate(e.target.value)}
				/>
				<label>Set Reminder</label>
				<input
					value={isReminder}
					checked={isReminder}
					type="checkbox"
					onChange={(e) => setReminder(e.target.checked)}
				/>
				<button className=" btn btn-block">Submit</button>
			</form>
		</div>
	);
};

export default Addtask;
