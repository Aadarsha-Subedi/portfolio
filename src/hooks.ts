import { useEffect, useState } from "react";

/* The section whose top has most recently crossed the upper third of the viewport. */
export function useActiveSection(ids: string[]) {
	const [active, setActive] = useState<string | undefined>();

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
				if (visible[0]) setActive(visible[0].target.id);
			},
			{ rootMargin: "-30% 0px -60% 0px" },
		);
		ids.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});
		return () => observer.disconnect();
	}, [ids]);

	return active;
}
