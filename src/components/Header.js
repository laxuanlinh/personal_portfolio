import MenuNormal from './MenuNormal'
import MenuMobile from './MenuMobile'
import logo from '../images/linh-logo.png'
import { useEffect, useState } from 'react'

export default function Header(){
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
		handleResize()
	})

	return (
		<div className="header">
			<div className="logo">
				<a href="#">
					<img src={logo} alt="my logo, back off"/>
				</a>
			</div>
			{ normalSize && <MenuNormal/>}
			{ !normalSize && <MenuMobile/> }
		</div>
	)
}