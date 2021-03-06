// import 'bootstrap/dist/css/bootstrap.min.css'; // basic
import './src/styles/bootstrap.min.css';  // bootwatch
import './src/styles/main.css'
import "animate.css/animate.min.css";

import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

export const wrapRootElement = ({ element }) => {
	return (
		<ParallaxProvider>
			{element}
		</ParallaxProvider>
	)
}