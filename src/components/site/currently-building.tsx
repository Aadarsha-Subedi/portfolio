import {
	AnimatedSpan,
	Terminal,
	TypingAnimation,
} from "@/components/ui/terminal";
import { profile } from "@/content/resume";

/*
 * A small terminal under the hero buttons that types out a question about the
 * project in progress and answers it, one line after another.
 */
export function CurrentlyBuilding() {
	const { name, tagline } = profile.building;
	return (
		<Terminal className="text-ink mt-2 max-w-[34rem]">
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
		</Terminal>
	);
}
