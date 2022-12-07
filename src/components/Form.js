import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useDispatch, useSelector } from 'react-redux'
import { toggle } from '../slices/displayFormSlice'
import { useState } from 'react'

export default function Form(){
	const [close, setClose] = useState(false)
	const dispatch = useDispatch()
	function closeForm() {
		const wait = (delay, ...args) => new Promise(resolve => setTimeout(resolve, delay, ...args));
		setClose(true)
		wait(700).then(() => dispatch(toggle()))
	}
	const send = () => {
		closeForm()
	}
	return (
		<div className={close ? "form-backdrop fade-out" : "form-backdrop fade-in"}>
			<div className={close ? "form drop-out" : "form drop-in"}>
				<div className="close">
					<FontAwesomeIcon icon={solid("xmark")} onClick={closeForm}/>
				</div>
				<div className="input-group" style={{marginTop:"0px"}}>
					<p style={{marginTop:"0px"}}>Your Name</p>
					<input className="input" name="name" placeholder="Name"/>
				</div>
				<div className="input-group">
					<p>Your Phone Number</p>
					<input className="input" name="phonenumber" placeholder="Phone Number"/>
				</div>
				<div className="input-group">
					<p>Your Email</p>
					<input className="input" name="email" placeholder="Email"/>
				</div>
				<div className="input-group">
					<p>Job Title</p>
					<input className="input" name="jobtitle" placeholder="Job Title"/>
				</div>
				<div className="input-group">
					<p>Your Message For Me</p>
					<textarea className="textarea" name="message" cols="40" rows="5"></textarea>
				</div>
				<div className="input-group submit">
					<button className="contact-me" onClick={send}>Send</button>
				</div>
			</div>
		</div>
	)
}