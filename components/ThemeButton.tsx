'use client'
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"
import { useTheme } from "next-themes"

const ThemeButton = () => {
	const { theme, resolvedTheme, setTheme } = useTheme()
	return (
		<button
			aria-label="Toggle Dark Mode"
			type="button"
			className="flex items-start justify-center rounded-lg"
			onClick={() => { setTheme(theme === "dark" ? "light" : "dark") }}
		>
			{
				resolvedTheme === "dark" ? (
					<SunIcon className="h-7 w-7 text-slate-100 transition ease-in-out duration-200" />
				) : (
					<MoonIcon className="h-7 w-7 text-slate-900 transition ease-in-out duration-200" />
				)
			}
		</button>
	)
}

export default ThemeButton