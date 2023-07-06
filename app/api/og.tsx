import { ImageResponse } from '@vercel/og';

export const config = {
	runtime: 'edge',
};

export default async function Handler() {
	try {

		return new ImageResponse(
			(
				<div
					style={{
						fontSize: 128,
						background: 'white',
						width: '100%',
						height: '100%',
						display: 'flex',
						textAlign: 'center',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					Developpeur Frontend ReactJS
				</div>

			),
			{
				width: 1200,
				height: 600,
			},
		);
	}
	catch (error) {
		console.error(error);
		return new Response('Failed to generate thumbnail', { status: 500 });
	}
}