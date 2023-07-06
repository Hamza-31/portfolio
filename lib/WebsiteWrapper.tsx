'use client'
import MovingDot from '@/components/MovingDot'
import Head from 'next/head'
import React, { useState } from 'react'

const WebsiteWrapper = ({
	children,
}: {
	children: React.ReactNode
}) => {

	const [coordinates, setCoordinates] = useState({ x: 0, y: 0 })
	return (
		<html lang="en" className='relative'>
			<Head>
				<meta property="og:image" content='../public/a_website.jpg' />
			</Head>
			<body
				onMouseMove={(e) => {
					setCoordinates({ x: e.clientX, y: e.clientY })
				}}
				className=" text-slate-400 bg-slate-900 font-sans">
				<MovingDot x={coordinates.x} y={coordinates.y} />
				<div id="modal"></div>
				{children}
			</body>
		</html>
	)
}

export default WebsiteWrapper