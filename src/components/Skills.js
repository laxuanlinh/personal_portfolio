import softwareapplication from '../images/software-application.png'
import cloud from '../images/cloud.png'
import consoleimg from '../images/console.png'

export default function Skills(){
	return (
		<div className="skill-block">
			<div className="skills">
				<div className="skill-item left">
					<div className="skill-icon">
						<img src={softwareapplication} alt=""/>
					</div>
					<div className="skill-title">
						Backend Developer
					</div>
					<div className="skill-description">
						I follow best coding practices
					</div>
					<div className="stack-title">
						Techstack
					</div>
					<div className="stack-list">
						<ul>
							<li>Java 11</li>
							<li>Spring Boot</li>
							<li>Spring Web</li>
							<li>Spring Data Jpa</li>
							<li>Spring Batch</li>
							<li>JMS</li>
							<li>AMQP</li>
						</ul>
					</div>
				</div>
				<div className="skill-item">
					<div className="skill-icon">
						<img src={cloud} alt=""/>
					</div>
					<div className="skill-title">Cloud Developer</div>
					<div className="skill-description">I have a good understanding of AWS ecosystem</div>
					<div className="stack-title">AWS services</div>
					<div className="stack-list">
						<ul>
							<li>EC2</li>
							<li>RDS</li>
							<li>S3</li>
							<li>Code Pipeline</li>
							<li>EKS</li>
						</ul>
					</div>
				</div>
				<div className="skill-item right">
					<div className="skill-icon">
						<img src={consoleimg} alt=""/>
					</div>
					<div className="skill-title">Semi-semi Pro Gamer</div>
					<div className="skill-description">I spend more hours shooting people in video games than coding</div>
					<div className="stack-title">Games I have mastered</div>
					<div className="stack-list">
						<ul>
							<li>CSGO</li>
							<li>PUBG</li>
							<li>Call of Duty</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}