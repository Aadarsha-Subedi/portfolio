import PillNav from "@/components/react-bits/pill-nav";
import { RESUME_URL } from "@/content/resume";

const PHOTO_URL = "https://pub-b2c92cab66f04a2bbb3db9deca643007.r2.dev/passport-photo.jpeg";

export const sections = [
	{ id: "work", label: "Work" },
	{ id: "experience", label: "Experience" },
	{ id: "skills", label: "Skills" },
	{ id: "contact", label: "Contact" },
];

const items = [...sections.map((s) => ({ label: s.label, href: `#${s.id}` })), { label: "Resume", href: RESUME_URL }];

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
					itemStyle="pill"
					hoverEffect="fill"
					indicator="dot"
					theme="light"
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
