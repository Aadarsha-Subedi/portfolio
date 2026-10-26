/*
 * A company's logo in a small round frame. With an href it links to the
 * company's site in a new tab; without a logo it falls back to initials.
 */
export function CompanyLogo({
	src,
	name,
	href,
	size = "md",
}: {
	src?: string;
	name: string;
	href?: string;
	size?: "md" | "lg";
}) {
	const initials = name
		.split(" ")
		.map((word) => word[0])
		.join("")
		.slice(0, 2);
	const className = `ring-ink/10 grid flex-none place-items-center overflow-hidden rounded-full font-semibold ring-1 ${size === "lg" ? "size-12 text-sm" : "size-9 text-[13px]"} ${src ? "bg-white p-1.5" : "bg-ink text-paper"}`;
	const mark = src ? <img src={src} alt="" className="size-full object-contain" /> : initials;
	if (!href) return <span className={className}>{mark}</span>;
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			aria-label={`${name} website (opens in a new tab)`}
			// Keep the click from also firing a surrounding card's click effect.
			onClick={(event) => event.stopPropagation()}
			className={`${className} transition-shadow hover:ring-sky-400 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none`}
		>
			{mark}
		</a>
	);
}
