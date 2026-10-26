import { BriefcaseIcon, StackIcon } from "@phosphor-icons/react";

import type { MagicBentoItem } from "@/components/react-bits/magic-bento";

/* The hero bento: two projects as large cards over two roles. The artwork is the component's built-in placeholders for now. */
export const bentoItems: MagicBentoItem[] = [
	{
		icon: <StackIcon />,
		label: "Project",
		title: "ResolveAI",
		description: "A multi-tenant AI support desk with human-reviewed reply drafts.",
		visual: "automation",
		colSpan: 2,
		rowSpan: 2,
	},
	{
		icon: <StackIcon />,
		label: "Project",
		title: "Pro-Goal",
		description: "Project management with tasks, versioned notes and Slack sync.",
		visual: "integration",
		colSpan: 2,
		rowSpan: 2,
	},
	{
		icon: <BriefcaseIcon />,
		label: "Experience",
		title: "Vanarx Tech",
		description: "Full Stack Engineer",
		colSpan: 2,
	},
	{
		icon: <BriefcaseIcon />,
		label: "Experience",
		title: "Professional Computer Systems",
		description: "Full Stack Developer Intern",
		colSpan: 2,
	},
];
