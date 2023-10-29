import SinglePost from "@/components/SinglePost";
import Link from "next/link";
import data from '../data/experience.json';
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import about from '../data/about.json'
import projects from '../data/project.json'
import SingleProject from "@/components/SingleProject";
import ContatForm from "@/components/ContatForm";
export default function Home() {
	return (
		<>
			<section id="about" className="col-span-3 max-[1145px]:px-4 min-[1145px]:w-9/12 min-[1145px]:ml-10">
				<h3 className="text-3xl py-7 text-teal-300">À propos</h3>
				<article className="space-y-6">
					{about.content.split('&&').map(text => (<p key={text.substring(0, 5)}>{text}</p>))}
				</article>
				<ol id="experiences" className="mt-24">
					<h3 className="text-3xl py-7 text-teal-300">Expériences</h3>
					{data.map(post => (

						<SinglePost key={post.id} post={post} />
					))}
				</ol>
				<div className="my-18">
					<h3 className="text-3xl py-5 text-teal-300">Curriculum Vitae</h3>
					<Link
						target="_blank"
						className="inline-flex items-center font-medium text-xl leading-tight text-slate-200 font-semibold group"
						aria-label="View Full Résumé" href="/files/Hamza_Labzioui_CV_Fullstack.pdf">
						<span>
							<span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
								Ouvrir le CV {" "}
							</span>
							<span className="whitespace-nowrap">
								<span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
									en PDF<ArrowRightIcon className="inline w-4 h-4 ml-2" />
								</span>
							</span>
						</span>
					</Link>
				</div>
				<ul id="projects" className="group/list pt-7">
					<h3 className="text-3xl pt-7 text-teal-300">Projets</h3>
					{projects.map(project => (

						<SingleProject key={project.id} project={project} />
					))}
				</ul>
				<footer className="max-w-md py-16 text-sm text-slate-500 text-center">

					<p>Développé avec <Link className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" href="https://nextjs.org/">Next.js 13</Link> et <Link className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" href="https://tailwindcss.com/">Tailwind CSS</Link>, déployé sur <Link className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" href="https://heroku.com">Heroku</Link>.</p>
				</footer>
			</section>

		</>
	)
}
