import { FileTextIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react";

import { ButtonLink } from "@/components/ui/button";
import { RESUME_URL, profile } from "@/content/resume";

/* The red block: the one-line case for hiring, and the two actions a recruiter came for. */
export function IntroBlock() {
	return (
		<div className="flex h-full flex-col justify-between gap-10 bg-red p-5 text-red-ink sm:p-7">
			<p className="max-w-[34ch] text-xl leading-snug font-medium sm:text-2xl">{profile.summary}</p>
			<div className="flex flex-wrap gap-2">
				<ButtonLink href={RESUME_URL} variant="secondary" size="lg" target="_blank" rel="noreferrer">
					<FileTextIcon aria-hidden /> View resume
				</ButtonLink>
				<ButtonLink
					href={`mailto:${profile.email}`}
					variant="onRed"
					size="lg"
				>
					<EnvelopeSimpleIcon aria-hidden /> Email me
				</ButtonLink>
			</div>
		</div>
	);
}
