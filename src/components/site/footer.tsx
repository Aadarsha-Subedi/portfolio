import { profile } from "@/content/resume";

export function Footer() {
	return (
		<footer className="border-t border-ink">
			<div className="mx-auto flex max-w-[1440px] flex-wrap items-baseline justify-between gap-4 px-4 py-6 text-sm text-ink-2 sm:px-6">
				<span>
					{profile.name} · {profile.location}
				</span>
				<span>Set in Archivo on a twelve-column grid</span>
			</div>
		</footer>
	);
}
