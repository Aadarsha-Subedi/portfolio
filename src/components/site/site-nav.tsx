import {
	BriefcaseIcon,
	CodeIcon,
	StackIcon,
	type Icon,
} from "@phosphor-icons/react";
import { type MouseEvent, useEffect, useRef, useState } from "react";

import PillNav from "@/components/react-bits/pill-nav";

const PHOTO_URL =
	"https://pub-b2c92cab66f04a2bbb3db9deca643007.r2.dev/passport-photo.jpeg";

export const sections: { id: string; label: string; icon: Icon }[] = [
	{ id: "experience", label: "Experience", icon: BriefcaseIcon },
	{ id: "projects", label: "Projects", icon: StackIcon },
	{ id: "skills", label: "Skills", icon: CodeIcon },
];

/* Space left between the bottom of the nav and a section's top edge after a jump. */
const OFFSET = 16;

const items = [
	...sections.map(({ id, label, icon: SectionIcon }) => ({
		label,
		href: `/#${id}`,
		icon: <SectionIcon aria-hidden />,
	})),
];

/*
 * The site's navigation: React Bits PillNav with Aadarsha's photo in the
 * round logo button, centred at the top within the page's content width.
 * A click scrolls its section's top to just under the nav, and the pill for
 * the section in view stays marked as the page scrolls.
 */
export function SiteNav() {
	const header = useRef<HTMLElement>(null);
	const [active, setActive] = useState("");

	useEffect(() => {
		const update = () => {
			const line = (header.current?.offsetHeight ?? 0) + OFFSET * 2;
			let current = "";
			for (const { id } of sections) {
				const section = document.getElementById(id);
				if (section && section.getBoundingClientRect().top <= line)
					current = `/#${id}`;
			}
			setActive(current);
		};
		update();
		window.addEventListener("scroll", update, { passive: true });
		window.addEventListener("resize", update);
		return () => {
			window.removeEventListener("scroll", update);
			window.removeEventListener("resize", update);
		};
	}, []);

	const jump = (item: { href?: string }, _index: number, event: MouseEvent) => {
		const id = item.href?.split("#")[1];
		const section = id ? document.getElementById(id) : null;
		// Off the main page the link loads it instead.
		if (!section) return;
		event.preventDefault();
		const top =
			section.getBoundingClientRect().top +
			window.scrollY -
			(header.current?.offsetHeight ?? 0) -
			OFFSET;
		window.scrollTo({ top, behavior: "smooth" });
		history.replaceState(null, "", `#${id}`);
	};

	return (
		<header
			ref={header}
			className="sticky top-0 z-40 overflow-x-clip px-4 pt-4 sm:px-6"
		>
			<div className="mx-auto flex max-w-[1392px] justify-center">
				<PillNav
					className="site-nav"
					logo={<img src={PHOTO_URL} alt="" draggable={false} />}
					logoAlt="Aadarsha Subedi, back to top"
					logoHref="/#top"
					items={items}
					activeHref={active}
					onItemClick={jump}
					size="lg"
					itemStyle="pill"
					hoverEffect="fill"
					indicator="dot"
					theme="light"
				/>
			</div>
		</header>
	);
}
