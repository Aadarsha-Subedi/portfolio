import type { Role } from "@/content/resume";

/* One role: dates and place on the left rail, the work on the right, figures set as a ruled row. */
export function RoleEntry({ role }: { role: Role }) {
	return (
		<article id={`role-${role.id}`} className="grid scroll-mt-20 grid-cols-12 gap-x-4 gap-y-4 border-b border-rule py-8 first:pt-0 sm:gap-x-6">
			<div className="col-span-12 sm:col-span-4">
				<p className="font-condensed text-numeral">{role.years}</p>
				<p className="mt-2 text-sm text-ink-2">
					{role.start} – {role.end}
					<br />
					{role.location}
				</p>
			</div>
			<div className="col-span-12 sm:col-span-8">
				<h3 className="text-2xl leading-tight font-semibold tracking-tight">
					{role.title}
					<span className="font-normal text-ink-2"> at {role.company}</span>
				</h3>

				{role.figures && (
					<dl className="mt-5 grid grid-cols-2 border-t border-ink lg:grid-cols-4">
						{role.figures.map((f) => (
							<div key={f.label} className="border-b border-rule py-3 pr-3 lg:border-b-0">
								<dt className="sr-only">{f.label}</dt>
								<dd className="font-condensed text-[2rem] leading-none text-red">{f.value}</dd>
								<dd className="mt-1 text-sm text-ink-2">{f.label}</dd>
							</div>
						))}
					</dl>
				)}

				<ul className="mt-5 flex flex-col gap-2.5">
					{role.highlights.map((h) => (
						<li key={h} className="relative max-w-[66ch] pl-5">
							<span aria-hidden className="absolute top-[0.7em] left-0 h-px w-2.5 bg-ink" />
							{h}
						</li>
					))}
				</ul>
			</div>
		</article>
	);
}
