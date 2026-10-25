import { education } from "@/content/resume";

/* Degree on the left rail like a role; the GPA set as the one figure that matters. */
export function EducationBlock() {
	return (
		<article className="grid grid-cols-12 gap-x-4 gap-y-4 sm:gap-x-6">
			<div className="col-span-12 sm:col-span-4">
				<p className="font-condensed text-numeral">2021–25</p>
				<p className="mt-2 text-sm text-ink-2">
					{education.start} – {education.end}
					<br />
					{education.location}
				</p>
			</div>
			<div className="col-span-12 sm:col-span-8">
				<h3 className="text-2xl leading-tight font-semibold tracking-tight">
					{education.degree}
					<span className="font-normal text-ink-2"> at {education.school}</span>
				</h3>
				<dl className="mt-5 grid grid-cols-2 border-t border-ink lg:grid-cols-4">
					<div className="py-3 pr-3">
						<dt className="sr-only">GPA</dt>
						<dd className="font-condensed text-[2rem] leading-none text-red">
							{education.gpa}
							<span className="text-ink-2"> / 10</span>
						</dd>
						<dd className="mt-1 text-sm text-ink-2">GPA</dd>
					</div>
				</dl>
				<p className="mt-4 max-w-[66ch] text-ink-2">
					<span className="font-semibold text-ink">Coursework:</span> {education.coursework.join(", ")}.
				</p>
			</div>
		</article>
	);
}
