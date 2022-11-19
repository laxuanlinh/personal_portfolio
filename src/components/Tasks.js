import Task from './Task'

export default function Tasks({tasks, onDelete, toggleDone}){
	
	return 	(
		<div className="tasks">
			<ul>
				{tasks.map((task) => {
					return (<Task key={task.id} task={task} onDelete={onDelete} toggleDone={toggleDone}/>)
				})}
			</ul>
		</div>
	)

}