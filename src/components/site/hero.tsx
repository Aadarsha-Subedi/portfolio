import { useLayoutEffect, useMemo, useRef, useState } from "react";

import MagicBento from "@/components/react-bits/magic-bento";
import RotatingText from "@/components/react-bits/rotating-text";
import { NameLine } from "@/components/site/name-line";
import { bentoItems } from "@/content/bento-items";
import { profile } from "@/content/resume";

const disciplines = ["Full Stack", "Frontend", "Backend"];

function ageOn(birthDate: string, today = new Date()) {
	/* Split the date by hand: new Date("YYYY-MM-DD") reads it as UTC, which can land on the day before. */
	const [year, month, day] = birthDate.split("-").map(Number);
	const age = today.getFullYear() - year;
	const hadBirthday =
		today.getMonth() + 1 > month || (today.getMonth() + 1 === month && today.getDate() >= day);
	return hadBirthday ? age : age - 1;
}

/*
 * The first screen, split into two halves at the page's fixed width. The left
 * half holds the name and age, the designation (only the discipline rotates
 * and "Engineer" holds still) and a short intro. The right half holds a bento of
 * two roles and two projects, each card as tall as its content, lit in the primary button's
 * sky blue.
 */
export function Hero() {
	return (
		<section
			aria-label="Introduction"
			className="mx-auto grid min-h-[calc(100dvh-5rem)] max-w-[1392px] grid-cols-1 content-center items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
		>
			{/*
			 * On wide screens the bento runs taller than the screen, so the left
			 * half sticks under the nav and sits a little above the middle.
			 */}
			<div className="flex flex-col gap-4 lg:sticky lg:top-20 lg:min-h-[calc(100dvh-7rem)] lg:justify-center lg:self-start lg:pb-[8dvh]">
				<NameLine name={profile.name} age={ageOn(profile.birthDate)} />
				{/*
				 * The flip effect pivots letters around a point behind the text, which
				 * draws them a few percent wider than their layout box. The words are
				 * left unclipped and the block gets extra side padding to cover it.
				 */}
				<p className="font-condensed text-ink flex items-center text-[clamp(2.25rem,1rem+4vw,4.5rem)] leading-none">
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
				<p className="text-ink-2 max-w-[34rem] text-base text-pretty sm:text-lg">
					{profile.intro}
				</p>
			</div>
			<MasonryBento />
		</section>
	);
}

/* The bento's rows step in 1px, so each card can span as many rows as its content needs. */
const ROW = 1;
const GAP = 12;
const PAD = 17;

/*
 * MagicBento lays cards on a grid of equal rows. To let each card be as tall
 * as its own content, measure every card's body and give it a row span that
 * covers it, which packs the two columns like a masonry wall.
 */
function MasonryBento() {
	const ref = useRef<HTMLDivElement>(null);
	const [heights, setHeights] = useState<number[]>([]);

	useLayoutEffect(() => {
		const root = ref.current;
		if (!root) return;
		const bodies = Array.from(root.querySelectorAll<HTMLElement>("[data-bento-body]"));
		const measure = () => {
			const next = bodies.map((body) => body.offsetHeight + PAD * 2);
			setHeights((current) => (current.join() === next.join() ? current : next));
		};
		const observer = new ResizeObserver(measure);
		bodies.forEach((body) => observer.observe(body));
		measure();
		return () => observer.disconnect();
	}, []);

	// MagicBento rebuilds its effects when the items change, so keep them stable between renders.
	const items = useMemo(
		() =>
			bentoItems.map((item, index) =>
				heights[index] ? { ...item, rowSpan: Math.ceil((heights[index] + GAP) / (ROW + GAP)) } : item,
			),
		[heights],
	);

	return (
		<div ref={ref}>
			<MagicBento
				items={items}
				columns={4}
				rowHeight={ROW}
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
				className="hero-bento"
				style={{ gridAutoRows: `${ROW}px` }}
			/>
		</div>
	);
}
