'use client'
import Link from 'next/link'
import React from 'react'

const SinglePost = ({ post }: any) => {
	return (
		<li className='py-7 mx-3'>
			<article className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
				<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
				<div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">{post.date}</div>
				<div className="z-10 sm:col-span-6 col-span-5">
					<h3>
						<div className="inline-flex items-baseline font-medium leading-tight text-slate-500 max-[1024px]:text-teal-300 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base">
							<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
							<span>{post.title}</span>
						</div>
					</h3>
					<ul className="mt-2 text-sm leading-normal list-disc prose:marker:test-teal-300">
						{post.description.split('&&').map((desc: string | null | undefined, index: number) => (
							<li key={desc?.substring(0, 5).concat(index.toString())}>{desc}.</li>
						))}</ul>
					<ul className="mt-2 flex flex-wrap">
						{post.stacks.map((stack: string | null | undefined) => (
							<li key={stack} className="mr-1.5 mt-2">
								<div className="lex items-center rounded-full group/link px-3 py-1 text-xs font-medium leading-5 bg-teal-400/10 text-teal-300">{stack}</div>
							</li>)
						)}
					</ul>
				</div>
			</article>
		</li>
	)
}

export default SinglePost