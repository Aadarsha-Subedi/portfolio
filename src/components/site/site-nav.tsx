import {
	BriefcaseIcon,
	CodeIcon,
	EnvelopeSimpleIcon,
	FileTextIcon,
	StackIcon,
	type Icon,
} from "@phosphor-icons/react";

import PillNav from "@/components/react-bits/pill-nav";
import { RESUME_URL } from "@/content/resume";

const PHOTO_URL =
	"https://pub-b2c92cab66f04a2bbb3db9deca643007.r2.dev/passport-photo.jpeg";

export const sections: { id: string; label: string; icon: Icon }[] = [
	{ id: "work", label: "Work", icon: StackIcon },
	{ id: "experience", label: "Experience", icon: BriefcaseIcon },
	{ id: "skills", label: "Skills", icon: CodeIcon },
	{ id: "contact", label: "Contact", icon: EnvelopeSimpleIcon },
];

const items = [
	...sections.map(({ id, label, icon: SectionIcon }) => ({
		label,
		href: `#${id}`,
		icon: <SectionIcon aria-hidden />,
	})),
	{ label: "Resume", href: RESUME_URL, icon: <FileTextIcon aria-hidden /> },
];

/*
 * The site's navigation: React Bits PillNav with Aadarsha's photo in the
 * round logo button, centred at the top within the page's content width.
 */
export function SiteNav() {
	return (
		<header className="sticky top-0 z-40 px-4 pt-4 sm:px-6">
			<div className="mx-auto flex max-w-[1392px] justify-center">
				<PillNav
					className="site-nav"
					logo={<img src={PHOTO_URL} alt="" draggable={false} />}
					logoAlt="Aadarsha Subedi, back to top"
					logoHref="#top"
					items={items}
					size="lg"
					itemStyle="pill"
					hoverEffect="fill"
					indicator="dot"
					theme="light"
					size='lg'
					onItemClick={(item, _index, e) => {
						if (item.href === RESUME_URL) {
							e.preventDefault();
							window.open(RESUME_URL, "_blank", "noreferrer");
						}
					}}
				/>
			</div>
		</header>
	);
}
