import { IconMinus, IconPlus } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";

import { TagList } from "@/components/ui/tag";
import { TextLink } from "@/components/ui/text-link";
import type { Project } from "@/content/resume";
import { cn } from "@/lib/utils";

import { Plate } from "./plate";

const ease = [0.16, 1, 0.3, 1] as const;

/*
 * The signature interaction: a project row opens along the grid into its case
 * study. The row's red marker slides to whichever entry is open; the detail
 * unrolls downward, columns already in place, so nothing jumps sideways.
 */
export function ProjectEntry({
	project,
	open,
	onToggle,
}: {
	project: Project;
	open: boolean;
	onToggle: () => void;
}) {
	const panelId = `project-${project.id}-detail`;

	return (
		<motion.li layout="position" className="relative border-b border-ink">
			{open && (
				<motion.span
					layoutId="project-marker"
					aria-hidden
					className="absolute top-0 -left-4 h-full w-1.5 bg-red sm:-left-6"
					transition={{ duration: 0.42, ease }}
				/>
			)}
			<h3>
				<button
					type="button"
					onClick={onToggle}
					aria-expanded={open}
					aria-controls={panelId}
					className="group/entry grid w-full grid-cols-12 items-baseline gap-x-4 py-5 text-left sm:gap-x-6"
				>
					<span
						className={cn(
							"col-span-10 font-condensed text-headline transition-colors duration-(--dur-base) sm:col-span-6",
							open ? "text-red" : "group-hover/entry:text-red",
						)}
					>
						{project.name}
					</span>
					<span className="col-span-5 hidden text-ink-2 sm:block">{project.summary}</span>
					<span className="col-span-2 flex justify-end sm:col-span-1">
						<span className="grid size-9 place-items-center shadow-[inset_0_0_0_1px_var(--ink)] transition-colors group-hover/entry:bg-ink group-hover/entry:text-paper">
							{open ? <IconMinus size={18} stroke={1.75} aria-hidden /> : <IconPlus size={18} stroke={1.75} aria-hidden />}
						</span>
					</span>
				</button>
			</h3>

			<AnimatePresence initial={false}>
				{open && (
					<motion.div
						id={panelId}
						key="detail"
						initial={{ height: 0, clipPath: "inset(0 0 100% 0)" }}
						animate={{ height: "auto", clipPath: "inset(0 0 0% 0)", transition: { duration: 0.48, ease } }}
						exit={{ height: 0, clipPath: "inset(0 0 100% 0)", transition: { duration: 0.26, ease: [0.65, 0, 0.35, 1] } }}
						className="overflow-hidden"
					>
						<div className="grid grid-cols-12 gap-x-4 gap-y-6 pb-8 sm:gap-x-6">
							<div className="col-span-12 sm:col-span-5 sm:col-start-2">
								<p className="mb-4 text-ink-2 sm:hidden">{project.summary}</p>
								<ul className="flex flex-col gap-3">
									{project.details.map((d) => (
										<li key={d} className="max-w-[60ch]">
											{d}
										</li>
									))}
								</ul>
								<TagList items={project.stack} className="mt-5" />
								<div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
									{project.live && (
										<TextLink href={project.live} external>
											Live app
										</TextLink>
									)}
									{project.source && (
										<TextLink href={project.source} external>
											Source on GitHub
										</TextLink>
									)}
								</div>
							</div>
							<Plate
								className="col-span-12 sm:col-span-6"
								src={project.image}
								alt={project.name}
								caption={project.live ? new URL(project.live).host : undefined}
							/>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.li>
	);
}
