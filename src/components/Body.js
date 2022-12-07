import Intro from './Intro'
import SelfIntro from './SelfIntro'
import Skills from './Skills'
import Companies from './Companies'
import Testimonials from './Testimonials'
import Footer from './Footer'

export default function Body(){
	return (
		<div className="body">
			<Intro/>
			<SelfIntro/>
			<Skills />
			<Companies />	
			<Testimonials />
			<Footer />
		</div>
	)
}