'use client'
import Link from "next/link";
import ThemeButton from "./ThemeButton";
import { useState } from "react";
import Modal from "./Modal";
import ContactForm from "./ContatForm";

const navigation = [
	{ name: "À propos", href: "#about" },
	{ name: "Expériences", href: "#experiences" },
	{ name: "Projets", href: "#projects" },
	// { name: "Contactez-moi", href: "/contact" },
];

const NavLink = ({ isHeader }: { isHeader: boolean }) => {
	const [showModal, setShowModal] = useState(false)
	return (
		<ul id="chaarizin-navigation" className={isHeader ? 'flex sm:ml-6 justify-between space-x-7 pt-5' : ""}>
			{navigation.map((item, index) => (
				<li
					className=""
					key={item.name}
				>
					<Link className="group flex items-center py-3 active" id={item.name} href={item.href}>
						<span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all bg-slate-300 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
						<span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200">
							{item.name}
						</span>
					</Link>
				</li>
			))}
			<div className="group flex items-center py-3 active">
				<span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all bg-slate-300 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>

				<button
					className="nav-text text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200"
					onClick={() => {
						setShowModal(true);
					}}
				> Contactez-moi</button>
			</div>
			{
				showModal ?
					(<Modal>
						<div
							className="absolute flex justify-center items-center inset-y-0 left-0 right-0"
							onClick={() => {
								setShowModal(false);
							}}
						>
							<div className="relative text-white bg-slate-900 rounded max-[460px]:w-full w-[450px] h-fit mx-auto ">
								<div
									onClick={() => {
										setShowModal(false);
									}}
									className=" absolute top-2 cursor-pointer right-2.5 text-slate-900 opacity-50 hover:opacity-100 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
								>
									<svg
										aria-hidden="true"
										className="w-5 h-5"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
											clipRule="evenodd"
										></path>
									</svg>
									<span className="sr-only">Close modal</span>
								</div>
								<div onClick={e => e.stopPropagation()}>

									<ContactForm />
								</div>

							</div>
						</div>
					</Modal>) : null
			}

		</ul>
	)
}

export default NavLink