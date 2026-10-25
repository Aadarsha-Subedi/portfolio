import { IconDownload, IconMail } from "@tabler/icons-react";

import { ButtonLink } from "@/components/ui/button";
import { RESUME_URL, profile } from "@/content/resume";

/* The red block: the one-line case for hiring, and the two actions a recruiter came for. */
export function IntroBlock() {
	return (
		<div className="flex h-full flex-col justify-between gap-10 bg-red p-5 text-red-ink sm:p-7">
			<p className="max-w-[34ch] text-xl leading-snug font-medium sm:text-2xl">{profile.summary}</p>
			<div className="flex flex-wrap gap-2">
				<ButtonLink href={RESUME_URL} variant="inverse" size="lg" target="_blank" rel="noreferrer">
					<IconDownload aria-hidden /> Resume (PDF)
				</ButtonLink>
				<ButtonLink
					href={`mailto:${profile.email}`}
					variant="outline"
					size="lg"
					className="text-red-ink shadow-[inset_0_0_0_1px_var(--red-ink)] before:bg-red-ink hover:text-red focus-visible:text-red"
				>
					<IconMail aria-hidden /> Email me
				</ButtonLink>
			</div>
		</div>
	);
}
