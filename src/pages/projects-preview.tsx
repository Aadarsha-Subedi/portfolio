import { ProjectCard } from "@/components/site/projects-section";
import { SiteNav } from "@/components/site/site-nav";
import { projects } from "@/content/resume";
import { PreviewOption as Option } from "@/pages/preview-option";

const featured = projects.filter((project) => project.featured);

/*
 * A review page for the Projects section. Nothing here is on the main page
 * until it is picked.
 */
export function ProjectsPreview() {
	return (
		<>
			<SiteNav />
			<main className="mx-auto max-w-[1392px] px-4 pb-32 sm:px-6">
				<header className="py-16">
					<p className="text-ink text-sm font-medium tracking-wide uppercase">
						Design preview
					</p>
					<h1 className="font-condensed text-ink mt-2 text-5xl leading-none">
						Projects section
					</h1>
					<p className="text-ink mt-4 max-w-[40rem] text-lg">
						A draft of the two project cards, with your real project data.
					</p>
				</header>

				<Option
					letter="A"
					name="Two cards"
					note="A clean card per project: the screenshot on a soft panel, the title with its links, then the resume points."
				>
					<div className="grid gap-6 md:grid-cols-2">
						{featured.map((project) => (
							<ProjectCard key={project.id} project={project} />
						))}
					</div>
				</Option>
			</main>
		</>
	);
}
