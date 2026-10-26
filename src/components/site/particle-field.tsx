import Particles from "@/components/react-bits/particles";

/*
 * The page background: React Bits Particles in light grey and soft red on
 * the paper, sparse and faint so they sit behind the content, fixed so the
 * content scrolls over a still field.
 */
export function ParticleField() {
	return (
		<div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
			<Particles
				particleColors={["#9aa3af", "#eba3a3"]}
				particleCount={90}
				particleSpread={10}
				speed={0.1}
				particleBaseSize={80}
				glow={0.3}
				opacity={0.6}
				twinkle={0.3}
				moveParticlesOnHover
				hoverEffect="parallax"
				lightMode
			/>
		</div>
	);
}
