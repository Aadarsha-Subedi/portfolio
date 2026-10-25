import CardNav, { type CardNavItem } from "@/components/react-bits/card-nav";
import { RESUME_URL, profile, projects } from "@/content/resume";

export const sections = [
	{ id: "work", label: "Work" },
	{ id: "experience", label: "Experience" },
	{ id: "education", label: "Education" },
	{ id: "skills", label: "Skills" },
	{ id: "contact", label: "Contact" },
];

const items: CardNavItem[] = [
	{
		label: "Work",
		description: "Things I designed, built and deployed end to end.",
		links: projects.map((p) => ({
			label: p.name,
			href: `#project-${p.id}`,
			projectId: p.id,
		})),
	},
	{
		label: "Career",
		description: "Where I’ve worked, what I studied and the tools I use.",
		links: [
			{ label: "Experience", href: "#experience" },
			{ label: "Education", href: "#education" },
			{ label: "Skills", href: "#skills" },
		],
	},
	{
		label: "Contact",
		description: "Email is the fastest way to reach me.",
		links: [
			{ label: "Email", href: `mailto:${profile.email}` },
			{ label: "LinkedIn", href: profile.links.linkedin },
			{ label: "GitHub", href: profile.links.github },
			{ label: "Search the site (Ctrl/⌘ K)", action: "index" },
		],
	},
];

/*
 * The site's navigation: React Bits CardNav, held to the page's content width
 * and stuck to the top. Project links open the project they point at.
 */
export function SiteNav({
	onOpenProject,
	onOpenIndex,
}: {
	onOpenProject?: (id: string) => void;
	onOpenIndex?: () => void;
}) {
	return (
		<header className="sticky top-0 z-40 px-4 pt-3 sm:px-6">
			<CardNav
				logo={
					<span className="font-condensed flex items-center gap-2 text-xl tracking-tight">
						<span aria-hidden className="bg-red size-3" />
						Aadarsha Subedi
					</span>
				}
				logoAlt="Aadarsha Subedi, back to top"
				logoHref="#top"
				items={items}
				cta={{
					label: "View resume",
					href: RESUME_URL,
					onClick: (e) => {
						e.preventDefault();
						window.open(RESUME_URL, "_blank", "noreferrer");
					},
				}}
				theme="light"
				className="site-nav"
				cardEffect="rise"
				openOn="click"
				accentColor="#0284c7"
				maxWidth={1392}
				onLinkClick={(link, _item, e) => {
					if (typeof link.projectId === "string" && onOpenProject) {
						e.preventDefault();
						onOpenProject(link.projectId);
					} else if (link.action === "index") {
						onOpenIndex?.();
					} else if (link.href?.startsWith("http")) {
						e.preventDefault();
						window.open(link.href, "_blank", "noreferrer");
					}
				}}
			/>
		</header>
	);
}
