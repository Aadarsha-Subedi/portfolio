import {
	EnvelopeSimpleIcon,
	GithubLogoIcon,
	type Icon,
	LinkedinLogoIcon,
	MapPinIcon,
	WhatsappLogoIcon,
} from "@phosphor-icons/react";

import { profile } from "@/content/resume";

const contacts: { label: string; href: string; icon: Icon }[] = [
	{ label: "WhatsApp", href: profile.links.whatsapp, icon: WhatsappLogoIcon },
	{ label: "LinkedIn", href: profile.links.linkedin, icon: LinkedinLogoIcon },
	{ label: "Email", href: `mailto:${profile.email}`, icon: EnvelopeSimpleIcon },
	{ label: "GitHub", href: profile.links.github, icon: GithubLogoIcon },
];

/*
 * The page's foot: name and address on the left with a link to this site's
 * source, and the ways to reach Aadarsha as round icon links on the right.
 */
export function Footer() {
	return (
		<footer id="contact" className="mx-auto max-w-[1392px] px-4 sm:px-6">
			<div className="border-ink/15 flex flex-col gap-6 border-t py-10 sm:flex-row sm:items-center sm:justify-between">
				<div className="flex flex-col gap-2">
					<p className="text-ink text-lg font-semibold">{profile.name}</p>
					<p className="text-ink/80 flex items-center gap-1.5 text-sm">
						<MapPinIcon aria-hidden className="size-4" />
						{profile.location}
					</p>
					<a
						href={profile.links.portfolio}
						target="_blank"
						rel="noreferrer"
						className="text-ink/80 flex w-fit items-center gap-1.5 text-sm underline-offset-4 hover:text-sky-700 hover:underline"
					>
						<GithubLogoIcon aria-hidden className="size-4" />
						Source of this site
					</a>
				</div>
				<ul className="flex gap-2">
					{contacts.map(({ label, href, icon: ContactIcon }) => (
						<li key={label}>
							<a
								href={href}
								target={href.startsWith("mailto:") ? undefined : "_blank"}
								rel="noreferrer"
								aria-label={label}
								title={label}
								className="border-ink/10 text-ink grid size-10 place-items-center rounded-full border bg-white/80 transition-colors duration-150 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
							>
								<ContactIcon aria-hidden className="size-5" />
							</a>
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
}
