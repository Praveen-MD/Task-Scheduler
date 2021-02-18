const Task = ({ task, onDelete }) => {
	return (
		<div key={task.id} className={`task  ${task.reminder ? "reminder" : ""}`}>
			<h2>
				{task.task}
				<button
					className="btn2"
					style={{ float: "right" }}
					onClick={() => onDelete(task.id)}
				>
					Delete
				</button>
			</h2>

			<h3>{task.date}</h3>
		</div>
	);
};

export default Task;
