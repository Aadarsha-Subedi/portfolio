import { ArrowLeftIcon } from "@phosphor-icons/react";

import FuzzyText from "@/components/react-bits/fuzzy-text";
import { ParticleField } from "@/components/site/particle-field";
import { ButtonLink } from "@/components/ui/button";
import { iconProps } from "@/components/ui/icons";

export function NotFound() {
	return (
		<>
			<ParticleField />
			<main className="mx-auto flex min-h-dvh max-w-[1440px] flex-col justify-center px-4 py-16 sm:px-6">
				<div className="grid grid-cols-12 gap-x-4 gap-y-8 sm:gap-x-6">
					<div className="text-ink col-span-12 -ml-1 lg:col-span-8">
						<FuzzyText
							fontSize="clamp(7rem, 4rem + 18vw, 22rem)"
							fontWeight={900}
							fontFamily="'Archivo Variable', sans-serif"
							color="currentColor"
							colorSplit={0}
							trigger="hover"
							direction="horizontal"
							baseIntensity={0.2}
							hoverIntensity={0.5}
							fuzzRange={30}
							sliceSize={1}
							fps={60}
							transitionDuration={0}
							intro
							introDuration={1400}
							letterSpacing={0}
							enableHover
							clickEffect={false}
							glitchMode={false}
							glitchInterval={2000}
							glitchDuration={200}
						>
							404
						</FuzzyText>
					</div>
					<div className="border-ink col-span-12 border-t pt-4 sm:col-span-8 lg:col-span-4 lg:self-end">
						<h1 className="font-condensed text-headline">Nothing here</h1>
						<p className="text-ink-2 mt-3 max-w-[40ch]">
							This page doesn’t exist, or it moved when the site was rebuilt.
							Everything lives on the front page now.
						</p>
						<ButtonLink href="/" variant="primary" className="mt-6">
							<ArrowLeftIcon {...iconProps} />
							Back to the site
						</ButtonLink>
					</div>
				</div>
			</main>
		</>
	);
}
