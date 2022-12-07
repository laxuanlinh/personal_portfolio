import ContactMe from './ContactMe'
export default function MenuNormal(){
	return (
		<div className="menu" id="menu-normal">
			<div className="address-block">
				<a href="#" className="address">Facebook</a>  
			</div>
			<div className="address-block">
				<a href="#" className="address">Twitter</a> 
			</div>
			<div className="address-block">
				<a href="#" className="address">Linkedin</a>  
			</div>
			<ContactMe />
		</div> 
	)
}