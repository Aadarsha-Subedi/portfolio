import { useEffect, useRef, useState } from "react";

import RotatingText from "@/components/react-bits/rotating-text";
import SphereImageGrid from "@/components/ui/image-sphere";
import { sphereFillers } from "@/content/sphere-fillers";

const disciplines = ["Full Stack", "Frontend", "Backend"];

/*
 * The first screen, split into two halves at the page's fixed width. The left
 * half holds the designation, where only the discipline rotates and
 * "Engineer" holds still. The right half holds the image sphere.
 */
export function Hero() {
	return (
		<section
			aria-label="Introduction"
			className="mx-auto grid min-h-[calc(100dvh-5rem)] max-w-[1392px] grid-cols-1 content-center items-center gap-8 px-4 sm:px-6 lg:grid-cols-2"
		>
			{/*
			 * The flip effect pivots letters around a point behind the text, which
			 * draws them a few percent wider than their layout box. The words are
			 * left unclipped and the block gets extra side padding to cover it.
			 */}
			<p className="flex items-center font-condensed text-[clamp(2.25rem,1rem+4vw,4.5rem)] leading-none text-ink">
				<RotatingText
					texts={disciplines}
					effect="flip"
					direction="up"
					highlight
					highlightColor="transparent"
					splitBy="words"
					staggerFrom="last"
					staggerDuration={0.025}
					splitLevelClassName="pb-0.5 sm:pb-1 md:pb-1"
					rotationInterval={2000}
					mainClassName="-ml-[0.42em] px-[0.42em] [&_.text-rotate-space]:pr-[0.22em]"
				/>
				<span>Engineer</span>
			</p>
			<SphereColumn />
		</section>
	);
}

/*
 * The sphere takes a fixed pixel size, so measure the column and size it to
 * fit, up to 600px, keeping the demo's radius-to-size ratio.
 */
function SphereColumn() {
	const ref = useRef<HTMLDivElement>(null);
	const [size, setSize] = useState(0);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new ResizeObserver(([entry]) => setSize(Math.min(600, Math.floor(entry.contentRect.width))));
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<div ref={ref} className="flex justify-center">
			{size > 0 && (
				<SphereImageGrid
					images={sphereFillers}
					containerSize={size}
					sphereRadius={size / 3}
					dragSensitivity={0.8}
					momentumDecay={0.96}
					maxRotationSpeed={6}
					baseImageScale={0.15}
					hoverScale={1.3}
					perspective={1000}
					autoRotate
					autoRotateSpeed={0.2}
				/>
			)}
		</div>
	);
}
