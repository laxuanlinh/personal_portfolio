import ContactMe from './ContactMe'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useState } from 'react'

export default function MenuMobile () {
	const [display, setDisplay] = useState(false)
	const showMenu = () => {
		setDisplay(!display)
	}
	return (
		<div className="menu menu-m" id="menu-mobile">
			<span href="#" className="icon" onClick={showMenu}>
				<FontAwesomeIcon icon={solid('bars')} />
			</span>
			{
				display && 
				<div id="menu-items-container">
					<div className="contact-block">
					  <ContactMe />
					</div>
					<div className="address-block">
					  <a href="#" className="address">Linkedin</a>  
					</div>
					<div className="address-block">
					  <a href="#" className="address">Twitter</a> 
					</div>
					<div className="address-block">
					  <a href="#" className="address">Facebook</a>  
					</div>
				</div>
			}
			
		</div>
	)
}