import Particles from "@/components/react-bits/particles";

/*
 * The page background: React Bits Particles drawn as ink on the paper,
 * fixed behind everything so content scrolls over a still field.
 */
export function ParticleField() {
	return (
		<div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
			<Particles
				particleColors={["#11151a", "#d41a1b"]}
				particleCount={200}
				particleSpread={10}
				speed={0.1}
				particleBaseSize={100}
				glow={0.5}
				twinkle={0.3}
				moveParticlesOnHover
				hoverEffect="parallax"
				lightMode
			/>
		</div>
	);
}
