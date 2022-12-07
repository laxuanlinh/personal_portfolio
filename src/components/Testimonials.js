import avatar from '../images/avatar-2.jpeg'

export default function Testimonials(){
	return (
		<div className="testimonials">
			<div className="testimonials-title">
				<h1>Testimonials</h1>
				<p>People who I have worked with have some nice things to say ...</p>
			</div>
			<div className="testimonial testimonial-1">
				<img src={avatar} alt="" />
				<p>"Linh is one of the best Java backend developers that I've had the privilege to work with"</p>
				<p className="author">Linh La Xuan<br/><p className="author-title">Another developer (absolutely not me)</p></p>

			</div>
	</div>
	)
}