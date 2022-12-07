import { Fragment } from 'react'
import { toggle } from '../slices/displayFormSlice'
import { useDispatch } from 'react-redux'

export default function ContactMe(){
	const dispatch = useDispatch()
	const click = () => {
		dispatch(toggle())
	}
	return (
		<Fragment>
			<button onClick={click} className="contact-me">Contact</button>
		</Fragment>
	)

}