import PropTypes from 'prop-types'
import Button from './Button'
import AddForm from './AddForm'

export default function Header({title, onAdd}){
	return (
		<div className="header">
			<div className="left">
				<h1>{title}</h1>
			</div>
			<div className="center">
				<div className="task-title">
					<AddForm onAdd={onAdd}/>
				</div>
				<div className="task-button">
				</div>
			</div>
			<div className="right"></div>
		</div>
	)
}

Header.defaultProps = {
	title: "This is not a title",
	body: "This is not a body"
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
	onAdd: PropTypes.func.isRequired
}