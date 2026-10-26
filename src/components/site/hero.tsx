import { EnvelopeSimpleIcon, FileTextIcon } from "@phosphor-icons/react";
import { useLayoutEffect, useMemo, useRef, useState } from "react";

import MagicBento from "@/components/react-bits/magic-bento";
import RotatingText from "@/components/react-bits/rotating-text";
import { NameLine } from "@/components/site/name-line";
import { TextWithTech } from "@/components/site/tech-chip";
import { ButtonLink } from "@/components/ui/button";
import { bentoItems } from "@/content/bento-items";
import { profile, RESUME_URL } from "@/content/resume";

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
 * and "Engineer" holds still), a short intro and the resume and email buttons. The right half holds a bento of
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
					<TextWithTech text={profile.intro} />
				</p>
				<div className="flex flex-wrap items-center gap-2 pt-1">
					<ButtonLink href={RESUME_URL} target="_blank" rel="noreferrer">
						<FileTextIcon aria-hidden />
						View resume
					</ButtonLink>
					<ButtonLink variant="secondary" href={`mailto:${profile.email}`}>
						<EnvelopeSimpleIcon aria-hidden />
						Email me
					</ButtonLink>
				</div>
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
	// Rows added to the last card of a shorter column so both columns end flush.
	const [extra, setExtra] = useState<number[]>([]);

	useLayoutEffect(() => {
		const root = ref.current;
		if (!root) return;
		const bodies = Array.from(root.querySelectorAll<HTMLElement>("[data-bento-body]"));
		const measure = () => {
			const next = bodies.map((body) => body.offsetHeight + PAD * 2);
			setHeights((current) => {
				if (current.join() === next.join()) return current;
				setExtra([]);
				return next;
			});
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
				heights[index]
					? { ...item, rowSpan: Math.ceil((heights[index] + GAP) / (ROW + GAP)) + (extra[index] ?? 0) }
					: item,
			),
		[heights, extra],
	);

	/*
	 * Once the cards are placed, find where each column ends and stretch the
	 * last card of any shorter column down to the longest one. Offsets are read
	 * instead of bounding boxes, which the intro's transform would skew.
	 */
	useLayoutEffect(() => {
		const root = ref.current;
		if (!root || !heights.length) return;
		const cells = Array.from(root.querySelectorAll<HTMLElement>(".magic-bento__cell"));
		const columns = new Map<number, { bottom: number; last: number }>();
		cells.forEach((cell, index) => {
			const bottom = cell.offsetTop + cell.offsetHeight;
			const column = columns.get(cell.offsetLeft);
			if (!column || bottom > column.bottom) columns.set(cell.offsetLeft, { bottom, last: index });
		});
		if (columns.size < 2) return;
		const end = Math.max(...Array.from(columns.values(), (column) => column.bottom));
		const add: number[] = [];
		columns.forEach(({ bottom, last }) => {
			if (end - bottom > 2) add[last] = Math.round((end - bottom) / (ROW + GAP));
		});
		if (add.length) setExtra((current) => cells.map((_, index) => (current[index] ?? 0) + (add[index] ?? 0)));
	}, [items, heights.length]);

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
