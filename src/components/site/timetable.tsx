import type { Role } from "@/content/resume";

/* Roles listed like a departures timetable: year as a big numeral, then company and title. */
export function Timetable({ roles }: { roles: Role[] }) {
	return (
		<ol className="grid grid-cols-[auto_1fr] border-t border-ink" aria-label="Roles">
			{roles.map((role) => (
				<li key={role.id} className="group/row relative col-span-2 grid grid-cols-subgrid border-b border-rule">
					<a href={`#role-${role.id}`} className="col-span-2 grid grid-cols-subgrid items-baseline py-3">
						<span className="font-condensed text-numeral transition-colors duration-(--dur-base) group-hover/row:text-red">
							{role.years}
						</span>
						<span className="flex flex-col pl-4 leading-tight">
							<span className="font-semibold">{role.company}</span>
							<span className="text-[0.95rem] text-ink-2">{role.title}</span>
						</span>
					</a>
					<span
						aria-hidden
						className="absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-red transition-transform duration-(--dur-slow) ease-out-expo group-hover/row:scale-x-100"
					/>
				</li>
			))}
		</ol>
	);
}
