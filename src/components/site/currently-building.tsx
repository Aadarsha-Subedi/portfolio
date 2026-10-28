import { Tooltip } from "@base-ui/react/tooltip";

import { profile } from "@/content/resume";

/*
 * A quiet pill under the hero buttons naming the project in progress. It goes
 * nowhere on click; hovering or focusing it shows the tagline.
 */
export function CurrentlyBuilding() {
	const { name, tagline } = profile.building;
	return (
		<Tooltip.Root>
			<Tooltip.Trigger
				delay={150}
				render={<span tabIndex={0} />}
				className="border-ink/15 text-ink-2 inline-flex w-fit cursor-default items-center gap-2 rounded-full border bg-white px-3 py-1.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
			>
				<span className="relative flex size-2" aria-hidden>
					<span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
					<span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
				</span>
				Currently building
				<span className="text-ink font-semibold">{name}</span>
			</Tooltip.Trigger>
			<Tooltip.Portal>
				<Tooltip.Positioner side="bottom" align="start" sideOffset={8}>
					<Tooltip.Popup className="bg-ink max-w-xs origin-[var(--transform-origin)] rounded-lg px-3 py-2 text-sm text-white shadow-lg transition-[transform,opacity] duration-150 data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0">
						{tagline}
					</Tooltip.Popup>
				</Tooltip.Positioner>
			</Tooltip.Portal>
		</Tooltip.Root>
	);
}
