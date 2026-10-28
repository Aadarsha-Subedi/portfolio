const R2 = "https://pub-b2c92cab66f04a2bbb3db9deca643007.r2.dev";

export const RESUME_URL = `${R2}/aadarsha-subedi-resume.pdf`;

export const profile = {
	name: "Aadarsha Subedi",
	role: "Full Stack Engineer",
	location: "Kathmandu, Nepal",
	summary:
		"Full-stack engineer (Python/Django, ReactJS/TypeScript) with 1+ year of production experience building multi-tenant, AI-powered SaaS. I own features end to end, from high-level architecture to scalable, maintainable code built on design patterns.",
	/* Drives the age beside the hero name, as YYYY-MM-DD. */
	birthDate: "2003-12-10",
	/* The lines under the hero's designation. Tech names with a logo show as chips. */
	intro:
		"I build AI-powered applications using Django and ReactJS, building features end-to-end and writing maintainable and scalable code through design patterns.",
	/* The project in progress, typed out in the terminal under the hero buttons. */
	building: {
		name: "Querylab",
		tagline: "Ask your database in plain English, then measure how well the AI answered.",
	},
	email: "aadarshasubedi406@gmail.com",
	phone: "+977 9766888591",
	links: {
		github: "https://github.com/Aadarsha-Subedi",
		linkedin: "https://linkedin.com/in/aadarsha-subedi-dev",
		whatsapp: "https://wa.link/nl18hf",
		/* This site's own source. */
		portfolio: "https://github.com/Aadarsha-Subedi/portfolio",
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
	website: string;
	logo: string;
	highlights: string[];
	stack: string[];
	figures?: { value: string; label: string }[];
}

export const experience: Role[] = [
	{
		id: "vanarx",
		title: "Full Stack Engineer",
		company: "Vanarx Tech",
		location: "Kathmandu, Nepal",
		start: "November 2025",
		end: "October 2026",
		years: "2025–26",
		website: "https://vanarxtech.com/",
		logo: "https://pub-b2c92cab66f04a2bbb3db9deca643007.r2.dev/vanarx-logo.svg",
		/* Resume points. Wrap a figure in **double asterisks** to set it in bold. */
		highlights: [
			"Built a real-time inbox for Socify, a customer-messaging and CRM product (**30+ businesses**, **NPR 10 lakh+ in sales**), connecting Instagram, Messenger, WhatsApp and TikTok with **1,000+ messages per account** and full data separation between businesses.",
			"Integrated Evolution API so customers can connect existing WhatsApp numbers, reducing onboarding friction from Meta’s pricing and number restrictions.",
			"Implemented post management, comment management/moderation and comment automation across Facebook, Instagram and TikTok.",
			"Led usage-based billing for AI replies (about **500,000 credits** purchased and used by clients) and ChargeBee subscriptions.",
			"Cut response times by about **35%** on optimized pages through caching and fewer database queries, working in Scrum sprints tracked in Jira.",
		],
		stack: [
			"Python",
			"Django",
			"Django REST Framework",
			"PostgreSQL",
			"Redis",
			"ReactJS",
			"NextJS",
			"TypeScript",
			"Tailwind CSS",
			"shadcn/ui",
			"Meta Graph API",
			"Postman",
			"Jira",
		],
	},
	{
		id: "pcs",
		title: "Full Stack Developer Intern",
		company: "Professional Computer Systems",
		location: "Kathmandu, Nepal",
		start: "August 2023",
		end: "November 2023",
		years: "2023",
		website: "https://pcs.com.np/",
		logo: "https://pub-b2c92cab66f04a2bbb3db9deca643007.r2.dev/pcs-logo.png",
		highlights: [
			"Built a School Management System with ReactJS and Tailwind CSS on the frontend and Spring Boot on the backend: authentication, role-based access for admins and students, course management, attendance and leave workflows (students apply; admins approve or reject).",
		],
		stack: ["ReactJS", "Tailwind CSS", "Java", "Spring Boot", "Postman"],
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
			"Customers submit tickets through a public workspace portal; agents reply by Gmail, with ticket assignment, a knowledge base, role-based access, an audit log and a dashboard, covered by unit and API tests with the Django test framework.",
			"Hybrid RAG (pgvector embeddings + BM25 keyword search via ParadeDB, fused with Reciprocal Rank Fusion and reranked with Cohere) powers human-reviewed AI reply drafts, with LLM query rewriting and provider-agnostic LLMs (Gemini, OpenAI) on per-workspace API keys.",
			"Citation-verified answers drop any claim whose quote is not in the cited passage, alongside a per-workspace semantic cache, an owner-only AI usage log and injection-safe prompts with structured JSON output.",
		],
		stack: [
			"Django",
			"Django REST Framework",
			"PostgreSQL",
			"Redis",
			"ReactJS",
			"Tailwind CSS",
			"shadcn/ui",
			"Docker",
			"Cloudflare",
		],
		image: `${R2}/resolve-ai-hero.png`,
		live: "https://resolve-ai.aadarshasubedi20.workers.dev/",
		source: "https://github.com/Aadarsha-Subedi/resolve-ai",
		featured: true,
	},
	{
		id: "pro-goal",
		name: "Pro-Goal",
		summary: "Project management with tasks, versioned notes and Slack sync.",
		details: [
			"Explore projects, manage tasks and notes in one place, and discuss findings through comments.",
			"Sync with teammates through Slack integration, with configurable Slack and email reminders.",
			"Role-based access control for each user within a project, plus activity tracking and note versioning.",
			"A reusable Django/DRF foundation: standardized API responses, pagination, filtering, a cache manager, soft deletes and structured request logging.",
			"Deployed on Cloudflare Workers, Pages and Containers.",
		],
		stack: [
			"Django",
			"Django REST Framework",
			"PostgreSQL",
			"Redis",
			"ReactJS",
			"Tailwind CSS",
			"shadcn/ui",
			"Docker",
			"Slack API",
			"Cloudflare",
		],
		image: `${R2}/pro-goal-hero.png`,
		live: "https://pro-goal.aadarshasubedi20.workers.dev/",
		source: "https://github.com/Aadarsha-Subedi/Pro-Goal",
		featured: true,
	},
	{
		id: "finance-tracker",
		name: "Finance Tracker",
		summary:
			"Track, edit and analyze spending, with monthly and category charts.",
		details: ["A finance tracker with analytics and customizable options."],
		stack: ["ReactJS", "Chart.js", "Node.js"],
		live: "https://finance-tracker-frontend-gules.vercel.app/",
		featured: false,
	},
	{
		id: "type-tester",
		name: "Type Tester",
		summary: "A minimal typing test with focus cues for WPM and accuracy.",
		details: [
			"A minimalistic type tester with assisted cues for focus, measuring WPM and accuracy.",
		],
		stack: ["ReactJS"],
		live: "https://type-tester-eight.vercel.app/",
		featured: false,
	},
	{
		id: "resume-builder",
		name: "Fresher Resume Builder",
		summary: "A resume builder for freshers, driven entirely by forms.",
		details: ["Fill in forms and get a clean resume for a first job."],
		stack: ["ReactJS", "React Hook Form"],
		live: "https://fresher-resume-builder.vercel.app/",
		source: "https://github.com/Aadarsha-Subedi/fresher-resume-builder",
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
		"Java Programming",
		"Python",
		"Structured and Object-Oriented Programming (C, C++)",
		"Machine Learning",
		"Artificial Intelligence",
	],
};

/* Skills by group, each shown as a chip. A name with a logo in tech-chip.tsx gets its icon. */
export const skills: { group: string; items: string[] }[] = [
	{ group: "Languages", items: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "HTML/CSS"] },
	{ group: "Backend", items: ["Django", "Django REST Framework", "Spring Boot", "Express.js"] },
	{ group: "Data & ML", items: ["Pandas", "NumPy", "Scikit-learn"] },
	{
		group: "GenAI",
		items: [
			"RAG",
			"Prompt Engineering",
			"Vector Search",
			"BM25 (ParadeDB)",
			"Hybrid Search",
			"Reciprocal Rank Fusion",
			"Reranking (Cohere)",
			"Semantic Caching",
			"Citation Verification",
			"Query Rewriting",
		],
	},
	{ group: "Frontend", items: ["ReactJS", "NextJS", "Tailwind CSS", "shadcn/ui", "TanStack"] },
	{ group: "Databases", items: ["PostgreSQL", "pgvector", "ParadeDB", "MongoDB", "Redis"] },
	{ group: "Deployment", items: ["Docker", "GitHub Actions", "AWS", "Cloudflare"] },
	{ group: "Monitoring", items: ["Sentry", "Cloudflare"] },
	{ group: "Tools", items: ["Git", "GitHub", "Jira", "Slack", "Postman", "Apidog"] },
];
