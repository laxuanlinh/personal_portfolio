import fsoft from '../images/fsoft.png'
import mitrais from '../images/mitrais.jpeg'
import singtel from '../images/singtel.png'
import ncs from '../images/ncs.png'
import { useEffect, useState } from 'react'

export default function Companies(){

	const [normalSize, setNormalSize] = useState(true)
	useEffect(() => {
		function handleResize(){
		    let width = window.outerWidth
		    if(width < 1000){
		    	setNormalSize(false)
		    } else {
		    	setNormalSize(true)
		    }
		}
		window.addEventListener("resize", handleResize)
	})

	return (
		<div className="companies">
			<div className="companies-title">
				<h1>I'm proud to have collaborated with some<br/> awesome companies:</h1>
			</div>
			<div className="companies-container">
				<div className="companies-grid" id="companies-grid" style={{gridTemplateColumns: normalSize ? "repeat(4 ,1fr)" : "repeat(1 ,1fr)"}}>
				<div className="company">
					<img src={fsoft} alt="" style={{width: "230px"}}/>
				</div>
				<div className="company">
					<img src={mitrais} alt="" style={{width: "220px"}}/>
				</div>
				<div className="company">
					<img src={singtel} alt="" style={{position: "relative", top:"-16px"}}/>
				</div>
				<div className="company">
					<img src={ncs} alt="" style={{position: "relative", top: "12px"}}/>
				</div>
				</div>
			</div>
		</div>
	)
}