import RotatingText from "@/components/react-bits/rotating-text";

const roles = ["Full Stack Engineer", "Frontend Engineer", "Backend Engineer"];

/*
 * The first screen, split into two halves at the page's fixed width. The left
 * half holds the rotating designation; the right half is reserved for now.
 */
export function Hero() {
	return (
		<section
			aria-label="Introduction"
			className="mx-auto grid min-h-[calc(100dvh-5rem)] max-w-[1392px] grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-2"
		>
			{/*
			 * The flip effect pivots letters around a point behind the text, which
			 * draws them a few percent wider than their layout box. The words are
			 * left unclipped and the white block gets extra side padding to cover it.
			 */}
			<div className="flex items-center">
				<RotatingText
					texts={roles}
					effect="flip"
					direction="up"
					highlight
					highlightColor="#ffffff"
					splitBy="words"
					staggerFrom="last"
					staggerDuration={0.025}
					splitLevelClassName="pb-0.5 sm:pb-1 md:pb-1"
					rotationInterval={2000}
					mainClassName="px-[0.42em] font-condensed [&_.text-rotate-space]:pr-[0.22em] text-[clamp(2.25rem,1rem+4vw,4.5rem)] leading-none shadow-[0_1px_2px_oklch(0.19_0.012_260/0.08),0_8px_24px_-12px_oklch(0.19_0.012_260/0.25)]"
				/>
			</div>
			<div aria-hidden className="hidden lg:block" />
		</section>
	);
}
