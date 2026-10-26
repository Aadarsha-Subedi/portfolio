import CircularGallery from "@/components/react-bits/circular-gallery";
import RotatingText from "@/components/react-bits/rotating-text";
import { galleryItems } from "@/content/gallery-items";

const disciplines = ["Full Stack", "Frontend", "Backend"];

/*
 * The first screen at the page's fixed width: the designation, where only the
 * discipline rotates and "Engineer" holds still, above a circular gallery of
 * two projects and two roles.
 */
export function Hero() {
	return (
		<section
			aria-label="Introduction"
			className="mx-auto flex min-h-[calc(100dvh-5rem)] max-w-[1392px] flex-col justify-center gap-6 px-4 py-8 sm:px-6"
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
			<div className="relative h-[clamp(380px,60vh,600px)]">
				<CircularGallery
					items={galleryItems}
					bend={3}
					textColor="#71717a"
					borderRadius={0.05}
					scrollEase={0.05}
					font="bold 30px Archivo"
				/>
			</div>
		</section>
	);
}
