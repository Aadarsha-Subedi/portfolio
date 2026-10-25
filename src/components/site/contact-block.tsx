import { GithubLogoIcon, LinkedinLogoIcon, CopyIcon, DownloadSimpleIcon } from "@phosphor-icons/react";

import { Button, ButtonLink } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import { RESUME_URL, profile } from "@/content/resume";

/* The close: the address set large enough to read across a room, plus copy and the other doors. */
export function ContactBlock() {
	const toast = useToast();

	async function copy() {
		try {
			await navigator.clipboard.writeText(profile.email);
			toast("Email address copied");
		} catch {
			toast("Couldn’t copy. Select the address instead");
		}
	}

	return (
		<div className="flex flex-col gap-8">
			<a
				href={`mailto:${profile.email}`}
				className="font-condensed text-[clamp(1.75rem,0.9rem+3.6vw,4.25rem)] leading-none break-all transition-colors duration-(--dur-base) hover:text-red"
			>
				{profile.email}
			</a>
			<div className="flex flex-wrap gap-2">
				<Button variant="primary" onClick={copy}>
					<CopyIcon aria-hidden /> Copy email
				</Button>
				<ButtonLink variant="secondary" href={RESUME_URL} target="_blank" rel="noreferrer">
					<DownloadSimpleIcon aria-hidden /> Resume (PDF)
				</ButtonLink>
				<ButtonLink variant="secondary" href={profile.links.linkedin} target="_blank" rel="noreferrer">
					<LinkedinLogoIcon aria-hidden /> LinkedIn
				</ButtonLink>
				<ButtonLink variant="secondary" href={profile.links.github} target="_blank" rel="noreferrer">
					<GithubLogoIcon aria-hidden /> GitHub
				</ButtonLink>
			</div>
		</div>
	);
}
