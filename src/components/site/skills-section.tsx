import { TechChips } from "@/components/site/tech-chip";
import { skills } from "@/content/resume";

/*
 * Skills on the same grid as Experience: the title in the first three
 * columns, then one ruled row per group with its skills as large chips.
 */
export function SkillsSection() {
	return (
		<section id="skills" aria-labelledby="skills-title" className="mx-auto max-w-[1392px] scroll-mt-24 px-4 py-16 sm:px-6">
			<div className="grid grid-cols-12 gap-x-6 gap-y-6">
				<div className="col-span-12 md:col-span-3">
					<h2 id="skills-title" className="font-condensed text-ink text-5xl leading-none">
						Skills
					</h2>
				</div>
				<dl className="border-ink/15 col-span-12 border-y md:col-span-9">
					{skills.map(({ group, items }) => (
						<div
							key={group}
							className="border-ink/15 grid grid-cols-12 gap-x-6 gap-y-3 border-b py-5 last:border-b-0"
						>
							<dt className="text-ink col-span-12 pt-2 font-semibold sm:col-span-3">{group}</dt>
							<dd className="col-span-12 sm:col-span-9">
								<TechChips items={items} size="lg" label={group} />
							</dd>
						</div>
					))}
				</dl>
			</div>
		</section>
	);
}
