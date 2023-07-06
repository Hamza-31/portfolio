import { ImageResponse } from 'next/server'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Portfolio Développeur Frntend'
export const size = {
	width: 1200,
	height: 630,
}

export const contentType = 'image/png'

// Font
const interSemiBold = fetch(
	new URL('./Inter-SemiBold.ttf', import.meta.url)
).then((res) => res.arrayBuffer())

// Image generation
export default async function Image() {
	return new ImageResponse(
		(
			// ImageResponse JSX element
			<div
				style={{
					fontSize: 128,
					background: 'white',
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				Portfolio Développeur Frntend
			</div>
		),
		// ImageResponse options
		{
			// For convenience, we can re-use the exported opengraph-image
			// size config to also set the ImageResponse's width and height.
			...size,
			fonts: [
				{
					name: 'Inter',
					data: await interSemiBold,
					style: 'normal',
					weight: 400,
				},
			],
		}
	)
}