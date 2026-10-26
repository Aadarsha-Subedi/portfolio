import MagicBento from "@/components/react-bits/magic-bento";
import RotatingText from "@/components/react-bits/rotating-text";
import { bentoItems } from "@/content/bento-items";

const disciplines = ["Full Stack", "Frontend", "Backend"];

/*
 * The first screen, split into two halves at the page's fixed width. The left
 * half holds the designation, where only the discipline rotates and
 * "Engineer" holds still. The right half holds a bento of two projects and
 * two roles, lit in the primary button's sky blue.
 */
export function Hero() {
	return (
		<section
			aria-label="Introduction"
			className="mx-auto grid min-h-[calc(100dvh-5rem)] max-w-[1392px] grid-cols-1 content-center items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-2"
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
			<MagicBento
				items={bentoItems}
				columns={4}
				rowHeight={205}
				gap={12}
				radius={20}
				enableBorderGlow
				enableSpotlight
				spotlightRadius={300}
				clickEffect
				enableStars
				particleCount={24}
				enableTilt
				enableMagnetism
				textAutoHide
				intro
				theme="light"
				glowColor="#0084d1"
			/>
		</section>
	);
}
