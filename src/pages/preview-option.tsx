/* One labelled option on a design preview page: a letter badge, a name and a note, then the sample. */
export function PreviewOption({
	letter,
	name,
	note,
	children,
}: {
	letter: string;
	name: string;
	note: string;
	children: React.ReactNode;
}) {
	return (
		<section
			aria-labelledby={`option-${letter}`}
			className="border-rule border-t py-16"
		>
			<div className="mb-10 flex flex-wrap items-baseline gap-x-4 gap-y-1">
				<span className="grid size-9 place-items-center rounded-full bg-sky-600 text-sm font-semibold text-white">
					{letter}
				</span>
				<h2
					id={`option-${letter}`}
					className="text-ink text-2xl font-semibold tracking-tight"
				>
					{name}
				</h2>
				<p className="text-ink-2 basis-full pl-[3.25rem] text-sm">{note}</p>
			</div>
			{children}
		</section>
	);
}
