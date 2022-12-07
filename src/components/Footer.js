import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useDispatch } from 'react-redux'
import { toggle } from '../slices/displayFormSlice'

export default function Footer(){
	const dispatch = useDispatch()
	const click = () => {
		dispatch(toggle())
	}
	return (
		<div className="footer">
			<div className="footer-banner-container">
				<div className="footer-banner">
					<div className="left-banner">
						<h1>HIRE ME</h1>
					</div>
					<div className="center-banner">
						<p>Interested? Let's start working together!!! Contact me today and I'll send you my CV</p>
					</div>
					<div className="right-banner">
						<button onClick={click}>Contact me</button>
					</div>
				</div>
			</div>
			<div className="footer-title">
				<p>"You miss 100% of the shots you don't take - Wayne Gretzky"<br/>MICHAEL SCOTT</p> 
			</div>
			<div className="footer-icons">
				<i className="fab fa-facebook-f" aria-hidden="true">
					<FontAwesomeIcon icon={brands("facebook-f")} />
				</i>
				<i className="fab fa-twitter" aria-hidden="true">
					<FontAwesomeIcon icon={brands("twitter")} />
				</i>
				<i className="fab fa-linkedin-in" aria-hidden="true">
					<FontAwesomeIcon icon={brands("linkedin")} />
				</i>
				<i className="fa fa-envelope" aria-hidden="true">
					<FontAwesomeIcon icon={solid("envelope")} />
				</i>
			</div>
			<div className="footer-disclaimer">
				<p>Copied and pasted with love by La Xuan Linh</p>
			</div>
		</div>
	)
}
