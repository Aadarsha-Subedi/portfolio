import { useEffect, useRef, useState } from "react";

import CountUp from "@/components/react-bits/count-up";
import TechText from "@/components/react-bits/tech-text";

const FONT_WEIGHT = 600;
const LETTER_SPACING = 0;
const MAX_SIZE = 56;

/*
 * TechText fits its wordmark into the box it is given and keeps a 5% margin on
 * each side, so a loose box leaves a gap after the name. This measures the
 * name at the chosen size and gives TechText a box that fits it exactly, with
 * the margins pulled back, so the age sits right after it on the same line.
 */
function useNameBox(name: string) {
	const lineRef = useRef<HTMLDivElement>(null);
	const [box, setBox] = useState<{ size: number; width: number } | null>(null);

	useEffect(() => {
		const line = lineRef.current;
		if (!line) return;
		const canvas = document.createElement("canvas").getContext("2d");
		if (!canvas) return;
		const family = getComputedStyle(line).fontFamily;
		const measure = (size: number) => {
			canvas.font = `${FONT_WEIGHT} ${size}px ${family}`;
			canvas.letterSpacing = `${LETTER_SPACING * size}px`;
			const m = canvas.measureText(name);
			return m.actualBoundingBoxLeft + m.actualBoundingBoxRight;
		};
		const fit = () => {
			// Leave room for ", 22" after the name.
			const room = line.clientWidth - MAX_SIZE * 1.6;
			const size = Math.min(MAX_SIZE, (MAX_SIZE * room) / measure(MAX_SIZE));
			setBox({ size, width: Math.ceil(measure(size) / 0.9) + 2 });
		};
		/*
		 * Wait for the name's own weight to load before measuring. Measured with
		 * a fallback font, the box comes out wider than the drawn name and leaves
		 * a gap before the comma.
		 */
		let alive = true;
		const observer = new ResizeObserver(() => alive && fit());
		const ready = document.fonts?.load(`${FONT_WEIGHT} ${MAX_SIZE}px ${family}`, name) ?? Promise.resolve();
		ready.then(() => {
			if (!alive) return;
			fit();
			observer.observe(line);
		}, fit);
		return () => {
			alive = false;
			observer.disconnect();
		};
	}, [name]);

	return { lineRef, box };
}

export function NameLine({ name, age }: { name: string; age: number }) {
	const { lineRef, box } = useNameBox(name);
	const size = box?.size ?? MAX_SIZE;
	const height = Math.round(size * 1.4);

	return (
		<div ref={lineRef} className="text-ink flex items-center font-semibold" style={{ height }}>
			<h1 className="relative h-full flex-none" style={{ width: box?.width ?? 0 }}>
				<span className="sr-only">{name}</span>
				{box && (
					<TechText
						text={name}
						align="left"
						fontWeight={FONT_WEIGHT}
						fontSize={size}
						letterSpacing={LETTER_SPACING}
						accentColor="#0084d1"
						reveal="letter"
						dashLength={4}
						dashGap={2}
						specks={15}
						intro="metrics"
						introDuration={2}
						clickKick
						guides={false}
						style={{ marginLeft: -box.width * 0.05 }}
					/>
				)}
			</h1>
			<span
				className="flex-none"
				style={{ fontSize: size, lineHeight: `${height}px`, marginLeft: box ? -box.width * 0.1 : 0 }}
			>
				<span aria-hidden="true">, </span>
				<span className="sr-only">age </span>
				<CountUp
					from={0}
					to={age}
					mode="count"
					easing="expo"
					format="standard"
					direction="up"
					duration={3}
					delay={0}
					trigger="view"
					replayOnHover
				/>
			</span>
		</div>
	);
}
