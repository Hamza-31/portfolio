import CustomThemeProvider from '@/lib/CustomThemeProvider'
import './globals.css'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import { useState } from 'react'
import MovingDot from '@/components/MovingDot'
import WebsiteWrapper from '@/lib/WebsiteWrapper'

export const metadata = {
	metadataBase: new URL('https://www.hamza-labzioui.com'),
	title: 'Hamza Labzioui - Développeur Fullstack',
	description: 'Portfolio de Hamza Labzioui. Développeur Fullstack à Toulouse, France. Java, SprinBoot, Hibernate, React, Angular, TailwindCSS, CI/CD, AWS. Contact: hamza.labzioui@gmail.com.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<WebsiteWrapper>
			<main className=" relative mx-auto  max-w-screen-xl grid max-[1145px]:grid-cols-1 grid-cols-5 min-h-screen pt-20">

				<Navbar />
				<div className="col-span-2 max-[1145px]:hidden border-r-2 border-slate-800"></div>
				{children}
			</main>
		</WebsiteWrapper>
	)
}
