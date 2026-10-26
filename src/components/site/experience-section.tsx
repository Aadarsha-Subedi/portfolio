import { Accordion } from "@base-ui/react/accordion";
import { CaretDownIcon } from "@phosphor-icons/react";

import { CompanyLogo } from "@/components/site/company-logo";
import { TechChips } from "@/components/site/tech-chip";
import { experience } from "@/content/resume";

/* Sets the parts of a resume point wrapped in **double asterisks** in bold. */
export function Emphasis({ text }: { text: string }) {
	return text.split("**").map((part, index) =>
		index % 2 ? (
			<strong key={index} className="text-ink font-semibold">
				{part}
			</strong>
		) : (
			part
		),
	);
}

/*
 * Experience as an accordion: one row per role, all open. Each row
 * opens onto the resume points, with the figures in bold, and the stack.
 */
export function ExperienceSection() {
	return (
		<section
			id="experience"
			aria-labelledby="experience-title"
			className="mx-auto max-w-[1392px] scroll-mt-24 px-4 py-16 sm:px-6"
		>
			<div className="grid grid-cols-12 gap-x-6 gap-y-6">
				<div className="col-span-12 md:col-span-3">
					<h2 id="experience-title" className="font-condensed text-ink text-5xl leading-none">
						Experience
					</h2>
				</div>
				<Accordion.Root
					multiple
					defaultValue={experience.map((role) => role.id)}
					className="border-ink/15 col-span-12 flex flex-col border-y md:col-span-9"
				>
					{experience.map((role) => (
						<Accordion.Item key={role.id} value={role.id} className="border-ink/15 border-b last:border-b-0">
							<Accordion.Header className="flex items-center gap-4">
								<CompanyLogo src={role.logo} name={role.company} href={role.website} />
								<Accordion.Trigger className="group flex flex-1 items-center gap-4 py-5 text-left">
									<span className="flex-1">
										<span className="text-ink block text-lg font-semibold">{role.company}</span>
										<span className="text-ink/80 block text-sm">{role.title}</span>
									</span>
									<span className="text-ink/80 hidden text-sm sm:block">
										{role.start} – {role.end}
									</span>
									<CaretDownIcon
										aria-hidden
										className="text-ink size-5 transition-transform duration-200 group-data-[panel-open]:rotate-180"
									/>
								</Accordion.Trigger>
							</Accordion.Header>
							<Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden transition-[height] duration-300 ease-out data-[ending-style]:h-0 data-[starting-style]:h-0">
								<div className="flex flex-col gap-4 pb-6 sm:pl-[3.25rem]">
									<p className="text-ink/80 text-sm sm:hidden">
										{role.start} – {role.end}
									</p>
									<ul className="text-ink flex list-disc flex-col gap-2 pl-4 text-[15px] leading-relaxed marker:text-sky-600">
										{role.highlights.map((point) => (
											<li key={point}>
												<Emphasis text={point} />
											</li>
										))}
									</ul>
									<TechChips items={role.stack} />
								</div>
							</Accordion.Panel>
						</Accordion.Item>
					))}
				</Accordion.Root>
			</div>
		</section>
	);
}
