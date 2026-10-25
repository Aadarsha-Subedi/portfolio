import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Gallery } from "@/gallery/gallery";
import "@/styles/index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Gallery />
	</StrictMode>,
);
