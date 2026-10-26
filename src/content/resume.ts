import financeTracker from "@/assets/projects/finance-tracker.jpg";
import resumeBuilder from "@/assets/projects/resume-builder.jpg";
import typeTester from "@/assets/projects/type-tester.jpg";

export const RESUME_URL =
	"https://pub-b2c92cab66f04a2bbb3db9deca643007.r2.dev/aadarsha-subedi-resume.pdf";

export const profile = {
	name: "Aadarsha Subedi",
	role: "Full Stack Engineer",
	location: "Kathmandu, Nepal",
	summary:
		"Full-stack engineer (Python/Django, React/TypeScript) with a year of production experience building multi-tenant, AI-powered SaaS. I own features end to end, from architecture to maintainable code.",
	/* The one or two lines under the hero's designation. */
	intro:
		"I build multi-tenant, AI-powered SaaS with Django and React, and own each feature end to end, from architecture to shipped code.",
	email: "aadarshasubedi406@gmail.com",
	links: {
		github: "https://github.com/Aadarsha-Subedi",
		linkedin: "https://linkedin.com/in/aadarsha-subedi-dev",
	},
};

export interface Role {
	id: string;
	title: string;
	company: string;
	location: string;
	start: string;
	end: string;
	years: string;
	highlights: string[];
	figures?: { value: string; label: string }[];
}

export const experience: Role[] = [
	{
		id: "vanarx",
		title: "Full Stack Engineer",
		company: "Vanarx Tech",
		location: "Kathmandu, Nepal",
		start: "Nov 2025",
		end: "Oct 2026",
		years: "2025–26",
		highlights: [
			"Built a real-time inbox for Socify, a customer-messaging and CRM product, connecting Instagram, Messenger, WhatsApp and TikTok with full data separation between businesses.",
			"Integrated Evolution API so customers can connect existing WhatsApp numbers, reducing onboarding friction from Meta’s pricing and number restrictions.",
			"Implemented post management, comment moderation and comment automation across Facebook, Instagram and TikTok.",
			"Led usage-based billing for AI replies and ChargeBee subscriptions.",
			"Reduced response times on optimized pages through caching and fewer database queries.",
		],
		figures: [
			{ value: "30+", label: "businesses on Socify" },
			{ value: "NPR 10 lakh+", label: "in sales" },
			{ value: "500,000", label: "AI reply credits used" },
			{ value: "~35%", label: "faster responses" },
		],
	},
	{
		id: "pcs",
		title: "Full Stack Developer Intern",
		company: "Professional Computer Systems",
		location: "Kathmandu, Nepal",
		start: "Aug 2023",
		end: "Nov 2023",
		years: "2023",
		highlights: [
			"Built a School Management System with React and Tailwind CSS on the frontend and Spring Boot on the backend: authentication, role-based access for admins and students, course management, attendance and leave workflows.",
			"Integrated the frontend with REST APIs and tested them with Postman in agile sprints.",
		],
	},
];

export interface Project {
	id: string;
	name: string;
	summary: string;
	details: string[];
	stack: string[];
	live?: string;
	source?: string;
	image?: string;
	featured: boolean;
}

export const projects: Project[] = [
	{
		id: "resolve-ai",
		name: "ResolveAI",
		summary: "A multi-tenant AI support desk with human-reviewed reply drafts.",
		details: [
			"Customers submit tickets through a public workspace portal; agents reply by Gmail, with ticket assignment, a knowledge base, role-based access, an audit log and a dashboard.",
			"Hybrid RAG (vector + PostgreSQL full-text search) powers AI reply drafts that an agent reviews before sending.",
			"A reusable Django/DRF foundation: standardized responses, pagination, filtering, a cache manager, soft deletes, structured logging and secrets management. Deployed on Cloudflare Workers, Pages and Containers.",
		],
		stack: ["Django", "DRF", "PostgreSQL", "Redis", "React", "Tailwind CSS", "shadcn/ui", "Docker", "Cloudflare"],
		live: "https://resolve-ai.aadarshasubedi20.workers.dev/",
		source: "https://github.com/Aadarsha-Subedi/resolve-ai",
		featured: true,
	},
	{
		id: "pro-goal",
		name: "Pro-Goal",
		summary: "Project management with tasks, versioned notes and Slack sync.",
		details: [
			"Explore projects, manage tasks and notes in one place, discuss through comments, and stay in sync with teammates through Slack.",
			"Activity tracking, note versioning, and configurable Slack and email reminders.",
			"Built on the same Django/DRF foundation and deployed on Cloudflare.",
		],
		stack: ["Django", "DRF", "PostgreSQL", "Redis", "React", "Tailwind CSS", "shadcn/ui", "Docker", "Cloudflare"],
		live: "https://pro-goal.aadarshasubedi20.workers.dev/",
		source: "https://github.com/Aadarsha-Subedi/Pro-Goal",
		featured: true,
	},
	{
		id: "finance-tracker",
		name: "Finance Tracker",
		summary: "Track, edit and analyze spending, with monthly and category charts.",
		details: ["A finance tracker with analytics and customizable options."],
		stack: ["React", "Chart.js", "Node.js"],
		live: "https://finance-tracker-frontend-gules.vercel.app/",
		image: financeTracker,
		featured: false,
	},
	{
		id: "type-tester",
		name: "Type Tester",
		summary: "A minimal typing test with focus cues for WPM and accuracy.",
		details: ["A minimalistic type tester with assisted cues for focus, measuring WPM and accuracy."],
		stack: ["React"],
		live: "https://type-tester-eight.vercel.app/",
		image: typeTester,
		featured: false,
	},
	{
		id: "resume-builder",
		name: "Fresher Resume Builder",
		summary: "A resume builder for freshers, driven entirely by forms.",
		details: ["Fill in forms and get a clean resume for a first job."],
		stack: ["React", "React Hook Form"],
		live: "https://fresher-resume-builder.vercel.app/",
		source: "https://github.com/Aadarsha-Subedi/fresher-resume-builder",
		image: resumeBuilder,
		featured: false,
	},
];

export const education = {
	school: "Vellore Institute of Technology",
	degree: "B.Tech, Computer Science and Engineering",
	location: "Vellore, Tamil Nadu, India",
	start: "Dec 2021",
	end: "Sep 2025",
	gpa: "9.03",
	coursework: [
		"Data Structures & Algorithms",
		"Databases",
		"Operating Systems",
		"Computer Networks",
		"Software Engineering",
		"Machine Learning",
		"Artificial Intelligence",
	],
};

export const skills: { group: string; items: string[] }[] = [
	{ group: "Languages", items: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "HTML/CSS"] },
	{ group: "Backend", items: ["Django", "Django REST Framework", "Spring Boot", "Express.js"] },
	{ group: "Frontend", items: ["React", "Tailwind CSS", "shadcn/ui", "TanStack"] },
	{ group: "Data", items: ["PostgreSQL (pgvector)", "MongoDB", "Redis"] },
	{ group: "Deploy", items: ["Docker", "GitHub Actions", "AWS EC2, Bedrock", "Cloudflare Workers, R2, Pages, Containers"] },
	{ group: "Monitoring", items: ["Sentry", "Cloudflare metrics, logs, traces"] },
];
