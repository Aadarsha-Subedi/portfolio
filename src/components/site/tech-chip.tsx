const ICONS = "https://pub-b2c92cab66f04a2bbb3db9deca643007.r2.dev";

/* Logos for the stack chips, keyed by the name shown on the chip. A name without a logo gets a text-only chip. */
const icons: Record<string, string> = {
	Django: "django.png",
	"Django REST Framework": "django-rest-framework.png",
	Docker: "docker.png",
	Java: "java.png",
	"Meta Graph API": "meta.png",
	PostgreSQL: "postgreSQL.png",
	Postman: "postman.png",
	Python: "python.png",
	ReactJS: "reactjs.png",
	Redis: "redis.png",
	"shadcn/ui": "shadcn.png",
	"Slack API": "slack.png",
	"Spring Boot": "spring-boot.png",
	"Tailwind CSS": "tailwindcss.png",
	TypeScript: "typescript.png",
};

export function TechChip({ name }: { name: string }) {
	const icon = icons[name];
	return (
		<li className="border-ink/10 text-ink-2 inline-flex h-6 items-center gap-1.5 rounded-md border bg-white/80 px-2 text-xs font-medium transition-colors duration-150 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-800">
			{icon && <img src={`${ICONS}/${icon}`} alt="" className="size-3.5 object-contain" draggable={false} />}
			{name}
		</li>
	);
}

export function TechChips({ items }: { items: string[] }) {
	return (
		<ul aria-label="Tech stack" className="flex flex-wrap gap-1.5">
			{items.map((item) => (
				<TechChip key={item} name={item} />
			))}
		</ul>
	);
}
