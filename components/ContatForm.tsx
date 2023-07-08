'use client'

import { Formik } from 'formik';
import React, { useState } from 'react'
import CustomInput from './CustomInput';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import Loader from './Loader';
import Link from 'next/link';
import * as yup from "yup";
import WarningAlert from './WarningAlert';
export const contactSchema = yup.object().shape({
	username: yup
		.string()
		.matches(/^[a-zA-Z0-9_\-]+$/, "Saisissez un nom d'usage valide")
		.min(3, "Veuillez entrer un nom d'utilisateur d'au moins 3 caractères et qui n'utilise que les caractères a-z, A-Z, 0-9 ou _.")
		.max(40)
		.required("*"),
	email: yup.string().email("Adresse mail invalide.").required("*"),
	message: yup
		.string()
		.min(50, "Tapez au moins 50 caractères avant de soumettre.")
		.max(1000, "Votre message doit contenir au maximum 1000 caractères.")
		.required("*"),

});
const ContactForm = () => {
	const [contactResponse, setContactResponse] = useState({
		message: "",
		error: ""
	});
	const handleSendContactEmail = async (values: { email: string, username: string, message: string }) => {
		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				body: JSON.stringify({
					email: values.email,
					username: values.username,
					message: values.message
				}),
				headers: {
					"Content-Type": "application/json",
					"Cache-Control": "no-cache",
					"Access-Control-Allow-Origin": "*",
				}
			})
			const data = await res.json()
			setContactResponse({ message: data.message, error: "" });
		} catch (error) {
			console.log("Error sending email from client : ", error)
			setContactResponse({ error: "Network might be slow, please try again.", message: "" })
		}
	}
	return (
		<>
			{contactResponse.message && (
				<div className="bg-slate-200 text-slate-900 px-5 py-5 rounded-lg flex justify-center items-center">
					<p>Votre message a été envoyé avec succès !</p>
				</div>
			)}
			{contactResponse.error && (
				<WarningAlert error={contactResponse.error} />

			)}
			{!contactResponse.message && (
				<Formik
					initialValues={{ username: "", email: "", message: "" }}
					validationSchema={contactSchema}
					onSubmit={async (values, { setSubmitting }) => {
						handleSendContactEmail(values)
						setTimeout(() => {
							setSubmitting(false)
						}, 3000)
					}}
				>
					{({
						values,
						errors,
						touched,
						handleChange,
						handleBlur,
						handleSubmit,
						isSubmitting,
					}) => (
						<form
							onSubmit={(e) => {
								e.preventDefault()
								e.stopPropagation()
								handleSubmit()
							}}
							className="bg-slate-200 text-slate-900 px-5 pb-5 pt-3 rounded-lg space-y-3 z-100 "
						>
							<h4 className="py-6 text-center"><em>Contactez-moi au </em> <Link className='underline' href="mailto:hamza.labzioui@gmail.com">hamza.labzioui@gmail.com</Link></h4>
							<p className="pb-6 text-center">ou laisser un message</p>
							<div className='grid grid-cols-2 max-[450px]:grid-cols-1 gap-2'>

								<CustomInput
									bg="bg-white"
									label="Nom d'usage"
									htmlFor="username"
									type="text"
									placeholder="Nom"
									name="username"
									id="username"
								/>
								<CustomInput
									bg="bg-white"
									label="Votre adresse mail"
									htmlFor="email"
									type="email"
									placeholder="hamza@exemple.com"
									name="email"
									id="email"
								/>
							</div>
							<div className="relative mb-6">
								<label
									htmlFor="message"
									className="block mb-2 text-sm font-medium"
								>
									Votre message{" "}

								</label>

								<textarea
									id="message"
									placeholder="Message"
									value={values.message}
									onBlur={handleBlur}
									onChange={handleChange}
									name="message"
									className="border text-slate-900 outline-none bg-white sm:text-sm rounded-lg block w-full p-2.5 h-44 resize-none"
									required
								/>

								<button
									className="absolute right-3 bottom-2"
									type="submit"
								>
									{isSubmitting ? (
										<Loader size="w-[20px] h-[20px]" />
									) : (
										<ArrowLongRightIcon width={24} color="#111827" />
									)}
								</button>
							</div>
							<span className="text-red-600">
								{errors.message && touched.message && errors.message}
							</span>
						</form>
					)}
				</Formik>
			)}
		</>
	)
}

export default ContactForm