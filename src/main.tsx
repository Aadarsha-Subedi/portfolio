import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";

import { App } from "@/app";
import "@/styles/index.css";

// "/" is the site, "/specimens" and "/preview/*" are review pages, anything else a 404.
const Gallery = lazy(() => import("@/gallery/gallery").then((m) => ({ default: m.Gallery })));
const ExperiencePreview = lazy(() =>
	import("@/pages/experience-preview").then((m) => ({ default: m.ExperiencePreview })),
);
const ProjectsPreview = lazy(() =>
	import("@/pages/projects-preview").then((m) => ({ default: m.ProjectsPreview })),
);
const NotFound = lazy(() => import("@/pages/not-found").then((m) => ({ default: m.NotFound })));
const pages: Record<string, React.ComponentType> = {
	"/specimens": Gallery,
	"/preview/experience": ExperiencePreview,
	"/preview/projects": ProjectsPreview,
};
const path = window.location.pathname.replace(/\/+$/, "") || "/";

function Route() {
	if (path === "/" || path === "/index.html") return <App />;
	const Page = pages[path] ?? NotFound;
	return (
		<Suspense>
			<Page />
		</Suspense>
	);
}

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Route />
	</StrictMode>,
);
