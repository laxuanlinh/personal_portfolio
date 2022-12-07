import avatar from '../images/avatar.jpeg'
import hero from '../images/hero-devices.svg'
import { TypeAnimation } from 'react-type-animation';

export default function Intro(){
	return (
		<div className="intro">
			<h1>Java Backend Developer</h1>
			<TypeAnimation
		      sequence={[
		        "I code for a living"
		      ]}
		      speed="0"
		      wrapper="h4"
		      cursor={true}
		      repeat={0}
		    />
			<div className="avatar-block">
				<img src={avatar} alt="My face, bitch" className="avatar"/>
			</div>
			<div className="intro-bottom-block">
				<img src={hero} alt="" className="intro-bottom" style={{verticalAlign: "middle"}}/>
			</div>
		</div>
	)
}