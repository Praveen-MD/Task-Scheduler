import Task from "./Task";

const Tasks = ({ tasks, onDelete }) => {
	return (
		<>
			{tasks.map((task) => {
				return <Task onDelete={onDelete} key={task.id} task={task} />;
			})}
		</>
	);
};

export default Tasks;
