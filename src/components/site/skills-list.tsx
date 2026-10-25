import { skills } from "@/content/resume";

/* Skills as a typeset table, not a wall of badges. */
export function SkillsList() {
	return (
		<dl className="border-t border-ink">
			{skills.map((s) => (
				<div key={s.group} className="grid grid-cols-12 gap-x-4 border-b border-rule py-3 sm:gap-x-6">
					<dt className="col-span-12 font-semibold sm:col-span-3">{s.group}</dt>
					<dd className="col-span-12 text-ink-2 sm:col-span-9">{s.items.join(" · ")}</dd>
				</div>
			))}
		</dl>
	);
}
