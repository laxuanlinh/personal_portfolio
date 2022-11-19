import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'

export default function Task({task, onDelete, toggleDone}){
	
	return (
		<div className="task">
			<div onClick={()=>toggleDone(task.id)} style={{opacity: task.done ? 0.5 : 1.0}}>
				<h3>{task.name}</h3>
			</div>
			<div>
				<span onClick={()=>onDelete(task.id)}><FaTimes/></span>
			</div>
		</div>
	)
}

Task.propTypes = {
	task: PropTypes.object.isRequired,
	onDelete: PropTypes.func.isRequired,
	toggleDone: PropTypes.func.isRequired
}