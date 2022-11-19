import Button from './Button'
import { useState } from 'react'

export default function AddForm({label, onAdd}){
	const [name, setName] = useState("")
	const onChange = (e) => {
		setName(e.target.value)
	}
	return (
		<form className="add-form" onSubmit={e => onAdd(e)}>
			<div className="form-control">
				<input type="text" name="Add task" onChange={e => onChange(e)}/>
				<Button label="Add"/>	
			</div>

		</form>
	)
}