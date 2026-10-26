import CountUp from "@/components/react-bits/count-up";
import MagicBento from "@/components/react-bits/magic-bento";
import RotatingText from "@/components/react-bits/rotating-text";
import TechText from "@/components/react-bits/tech-text";
import { bentoItems } from "@/content/bento-items";
import { profile } from "@/content/resume";

const disciplines = ["Full Stack", "Frontend", "Backend"];

function ageOn(birthDate: string, today = new Date()) {
	const born = new Date(birthDate);
	const age = today.getFullYear() - born.getFullYear();
	const hadBirthday =
		today.getMonth() > born.getMonth() ||
		(today.getMonth() === born.getMonth() && today.getDate() >= born.getDate());
	return hadBirthday ? age : age - 1;
}

/*
 * The first screen, split into two halves at the page's fixed width. The left
 * half holds the name with the age counting up beside it, the designation (only the discipline rotates and
 * "Engineer" holds still) and a short intro. The right half holds a bento of
 * two projects and two roles in four equal cards, lit in the primary button's
 * sky blue.
 */
export function Hero() {
	return (
		<section
			aria-label="Introduction"
			className="mx-auto grid min-h-[calc(100dvh-5rem)] max-w-[1392px] grid-cols-1 content-center items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
		>
			<div className="flex flex-col gap-4">
				{/*
				 * TechText draws the name on a canvas, so the heading keeps the name
				 * as real text for screen readers and search.
				 */}
				<div className="text-ink flex items-center gap-3">
					<h1 className="h-16 w-[min(100%,24rem)] flex-none sm:h-20">
						<span className="sr-only">{profile.name}</span>
						<TechText
							text={profile.name}
							align="left"
							fontWeight={600}
							fontSize={150}
							accentColor="#0084d1"
							reveal="letter"
							dashLength={4}
							dashGap={2}
							specks={15}
							intro="metrics"
							introDuration={2}
							clickKick
							guides={false}
							style={{ marginLeft: "-5%" }}
						/>
					</h1>
					<span className="text-ink-2 flex flex-col leading-none">
						<CountUp
							from={0}
							to={ageOn(profile.birthDate)}
							mode="count"
							easing="expo"
							format="standard"
							direction="up"
							duration={3}
							delay={0}
							trigger="view"
							replayOnHover
							className="text-ink text-3xl font-bold sm:text-4xl"
						/>
						<span className="mt-1 text-xs tracking-wide uppercase">years</span>
					</span>
				</div>
				{/*
				 * The flip effect pivots letters around a point behind the text, which
				 * draws them a few percent wider than their layout box. The words are
				 * left unclipped and the block gets extra side padding to cover it.
				 */}
				<p className="font-condensed text-ink flex items-center text-[clamp(2.25rem,1rem+4vw,4.5rem)] leading-none">
					<RotatingText
						texts={disciplines}
						effect="flip"
						direction="up"
						highlight
						highlightColor="transparent"
						splitBy="words"
						staggerFrom="last"
						staggerDuration={0.025}
						splitLevelClassName="pb-0.5 sm:pb-1 md:pb-1"
						rotationInterval={2000}
						mainClassName="-ml-[0.42em] px-[0.42em] [&_.text-rotate-space]:pr-[0.22em]"
					/>
					<span>Engineer</span>
				</p>
				<p className="text-ink-2 max-w-[34rem] text-base text-pretty sm:text-lg">
					{profile.intro}
				</p>
			</div>
			<MagicBento
				items={bentoItems}
				columns={4}
				rowHeight={300}
				gap={12}
				radius={20}
				enableBorderGlow
				enableSpotlight
				spotlightRadius={300}
				clickEffect
				enableStars
				particleCount={24}
				enableTilt
				enableMagnetism
				textAutoHide
				intro
				theme="light"
				glowColor="#0084d1"
				className="hero-bento"
			/>
		</section>
	);
}
