import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";

import { App } from "@/app";
import "@/styles/index.css";

// "/" is the site, anything else a 404.
const NotFound = lazy(() => import("@/pages/not-found").then((m) => ({ default: m.NotFound })));
const path = window.location.pathname.replace(/\/+$/, "") || "/";

function Route() {
	if (path === "/" || path === "/index.html") return <App />;
	return (
		<Suspense>
			<NotFound />
		</Suspense>
	);
}

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Route />
	</StrictMode>,
);
