import { ArrowUpRightIcon } from "@phosphor-icons/react";

import { ButtonLink } from "@/components/ui/button";
import { type Project, projects } from "@/content/resume";

const GITHUB_ICON =
	"https://pub-b2c92cab66f04a2bbb3db9deca643007.r2.dev/github.png";

const featured = projects.filter((project) => project.featured);

/*
 * Projects on the same grid as Experience and Skills: two clean cards, each
 * with a crisp screenshot, the title with its links, a summary and the
 * resume points.
 */
export function ProjectsSection() {
	return (
		<section
			id="work"
			aria-labelledby="work-title"
			className="mx-auto max-w-[1392px] scroll-mt-24 px-4 py-16 sm:px-6"
		>
			<div className="grid grid-cols-12 gap-x-6 gap-y-6">
				<div className="col-span-12 md:col-span-3">
					<h2
						id="work-title"
						className="font-condensed text-ink text-5xl leading-none"
					>
						Projects
					</h2>
				</div>
				<div className="col-span-12 grid gap-6 md:col-span-9 lg:grid-cols-2">
					{featured.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</div>
		</section>
	);
}

export function ProjectCard({ project }: { project: Project }) {
	return (
		<article className="border-ink/10 flex flex-col overflow-hidden rounded-2xl border bg-white transition-shadow duration-200 hover:shadow-[0_24px_48px_-32px_oklch(0.19_0.012_260/0.35)]">
			{/* The screenshot sits inset on a soft sky panel, cropped at the bottom like a window peeking up. */}
			{project.image && (
				<div className="bg-gradient-to-br from-sky-100 via-sky-50 to-white px-6 pt-6">
					<img
						src={project.image}
						alt={`${project.name} screenshot`}
						width={1920}
						height={910}
						loading="lazy"
						decoding="async"
						className="border-ink/10 block h-auto w-full rounded-t-lg border border-b-0 shadow-[0_-8px_32px_-16px_oklch(0.19_0.012_260/0.35)]"
					/>
				</div>
			)}
			<div className="flex flex-1 flex-col gap-4 p-6">
				<div className="flex flex-wrap items-center justify-between gap-3">
					<h3 className="text-ink text-xl font-semibold">{project.name}</h3>
					<ProjectLinks project={project} />
				</div>
				<p className="text-ink/80 -mt-2 text-[15px]">{project.summary}</p>
				<ul className="text-ink flex list-disc flex-col gap-2 pl-4 text-[15px] leading-relaxed marker:text-sky-600">
					{project.details.map((point) => (
						<li key={point}>{point}</li>
					))}
				</ul>
			</div>
		</article>
	);
}

/* The project's links, live site first, in the site's own button styles. */
function ProjectLinks({ project }: { project: Project }) {
	return (
		<div className="flex flex-wrap gap-2">
			{project.live && (
				<ButtonLink href={project.live} target="_blank" rel="noreferrer">
					Live site
					<ArrowUpRightIcon aria-hidden />
				</ButtonLink>
			)}
			{project.source && (
				<ButtonLink
					variant="secondary"
					href={project.source}
					target="_blank"
					rel="noreferrer"
				>
					<img
						src={GITHUB_ICON}
						alt=""
						className="size-4 object-contain"
						draggable={false}
					/>
					Source
				</ButtonLink>
			)}
		</div>
	);
}
