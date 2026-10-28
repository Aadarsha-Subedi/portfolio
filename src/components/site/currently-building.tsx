import { useState } from "react";

import {
	AnimatedSpan,
	Terminal,
	TypingAnimation,
} from "@/components/ui/terminal";
import { profile } from "@/content/resume";

/* How long the typed "clear" stays on screen before the terminal wipes and starts over. */
const CLEAR_PAUSE = 800;

/*
 * A small terminal under the hero buttons that types out a question about the
 * project in progress and answers it, one line after another. It ends by
 * typing "clear", then remounts empty and plays again, on a loop.
 */
export function CurrentlyBuilding() {
	const { name, tagline } = profile.building;
	const [run, setRun] = useState(0);
	return (
		<Terminal
			key={run}
			className="text-ink mt-2 max-w-[34rem] [&_code]:min-h-[11.5rem]"
			onComplete={() =>
				setTimeout(() => setRun((current) => current + 1), CLEAR_PAUSE)
			}
		>
			<TypingAnimation className="text-ink-2">
				$ What is Aadarsha currently building?
			</TypingAnimation>
			<AnimatedSpan className="text-emerald-600">
				✔ Found 1 project in progress.
			</AnimatedSpan>
			<AnimatedSpan>
				<span>
					→ <span className="font-semibold text-sky-700">{name}</span>
				</span>
			</AnimatedSpan>
			<TypingAnimation className="text-ink-2">$ What is it?</TypingAnimation>
			<AnimatedSpan className="whitespace-pre-wrap">{`→ ${tagline}`}</AnimatedSpan>
			<AnimatedSpan className="text-emerald-600">
				✔ Status: actively building.
			</AnimatedSpan>
			<TypingAnimation className="text-ink-2">$ clear</TypingAnimation>
		</Terminal>
	);
}
