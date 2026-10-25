import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

/*
 * The designation changes in place: the discipline slides up out of a fixed
 * line box and the next one rises in behind it, while "Engineer" holds still.
 * Pauses on hover; reduced motion swaps the words with a fade only.
 */
export function RoleFlip({
	disciplines = ["Full Stack", "Frontend", "Backend"],
	title = "Engineer",
	interval = 2800,
	className,
}: {
	disciplines?: string[];
	title?: string;
	interval?: number;
	className?: string;
}) {
	const [index, setIndex] = useState(0);
	const [paused, setPaused] = useState(false);

	useEffect(() => {
		if (paused) return;
		const id = window.setInterval(() => setIndex((i) => (i + 1) % disciplines.length), interval);
		return () => window.clearInterval(id);
	}, [paused, interval, disciplines.length]);

	return (
		<p
			className={cn("flex flex-wrap items-baseline gap-x-[0.25em]", className)}
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
		>
			<span className="sr-only">
				{disciplines[0]} {title}
			</span>
			<span aria-hidden className="relative inline-flex overflow-hidden pb-[0.08em] text-red">
				<AnimatePresence mode="popLayout" initial={false}>
					<motion.span
						key={disciplines[index]}
						layout
						initial={{ y: "105%" }}
						animate={{ y: 0, transition: { duration: 0.55, ease } }}
						exit={{ y: "-105%", transition: { duration: 0.32, ease: [0.65, 0, 0.35, 1] } }}
						className="inline-block whitespace-nowrap"
					>
						{disciplines[index]}
					</motion.span>
				</AnimatePresence>
			</span>
			<motion.span layout aria-hidden transition={{ duration: 0.55, ease }}>
				{title}
			</motion.span>
		</p>
	);
}
