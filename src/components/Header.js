import PropTypes from 'prop-types'
import Button from './button'

export default function Header(props){
	return (
		<div className="header">
			<div className="left"></div>
			<div className="center">
				<div className="task-title">
					<h1>Header: {props.title}</h1>
				</div>
				<div className="task-button">
					<Button label="Add"/>
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
	title: PropTypes.string.isRequired
}