import { motion } from "motion/react";

import { useTheme } from "../../contexts/theme-context";

export const ThemeButton = () => {
	const theme = useTheme();

	return (
		<div className="flex items-center justify-center">
			<button
				style={{
					justifyContent:
						theme?.theme === "dark" ? "flex-end" : "flex-start",
				}}
				onClick={(e) => {
					e.preventDefault();
					theme?.setTheme(theme.theme === "dark" ? "light" : "dark");
				}}
				className="flex h-5 w-10 rounded-full bg-neutral-400 p-1"
			>
				<motion.button
					layout
					transition={{
						type: "spring",
						visualDuration: 0.3,
						bounce: 0.2,
					}}
					className="h-full w-5 rounded-full bg-neutral-600"
				></motion.button>
			</button>
		</div>
	);
};
