const ICONS = "https://pub-b2c92cab66f04a2bbb3db9deca643007.r2.dev";

/* Logos for the stack chips, keyed by the name shown on the chip. A name without a logo gets a text-only chip. */
const icons: Record<string, string> = {
	Cloudflare: "cloudflare.png",
	Django: "django.png",
	"Django REST Framework": "django-rest-framework.png",
	Docker: "docker.png",
	Java: "java.png",
	"Meta Graph API": "meta.png",
	PostgreSQL: "postgreSQL.png",
	Postman: "postman.png",
	Python: "python.png?v=2",
	ReactJS: "reactjs.png",
	Redis: "redis.png",
	"shadcn/ui": "shadcn.png",
	"Slack API": "slack.png",
	"Spring Boot": "spring-boot.png",
	"Tailwind CSS": "tailwindcss.png",
	TypeScript: "typescript.png",
};

const sizes = {
	sm: { chip: "h-6 gap-1.5 px-2 text-xs", icon: "size-3.5" },
	md: { chip: "h-7 gap-1.5 px-2 text-[0.85em] align-middle", icon: "size-4" },
};

/* A tech name with its logo. "md" sits inline in running text; "sm" fills the bento's stack lists. */
export function TechChip({ name, size = "sm" }: { name: string; size?: keyof typeof sizes }) {
	const icon = icons[name];
	return (
		<span
			className={`border-ink/10 text-ink-2 inline-flex items-center rounded-md border bg-white/80 font-medium transition-colors duration-150 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-800 ${sizes[size].chip}`}
		>
			{icon && <img src={`${ICONS}/${icon}`} alt="" className={`${sizes[size].icon} object-contain`} draggable={false} />}
			{name}
		</span>
	);
}

export function TechChips({ items }: { items: string[] }) {
	return (
		<ul aria-label="Tech stack" className="flex flex-wrap gap-1.5">
			{items.map((item) => (
				<li key={item} className="flex">
					<TechChip name={item} />
				</li>
			))}
		</ul>
	);
}

/* Running text with every known tech name in it shown as an inline chip. */
export function TextWithTech({ text }: { text: string }) {
	const names = Object.keys(icons).sort((a, b) => b.length - a.length);
	const pattern = new RegExp(`(${names.map((name) => name.replace(/[.*+?^${}()|[\]\\/]/g, "\\$&")).join("|")})`);
	return text.split(pattern).map((part, index) =>
		icons[part] ? <TechChip key={index} name={part} size="md" /> : part,
	);
}
