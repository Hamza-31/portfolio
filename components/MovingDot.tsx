import React from 'react'

const MovingDot = ({ x, y }: any) => {
	return (
		<div className="pointer-events-none fixed inset-0 z-50 transition duration-300 "
			style={{ backgroundImage: `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)` }}
		></div>
	)
}

export default MovingDot