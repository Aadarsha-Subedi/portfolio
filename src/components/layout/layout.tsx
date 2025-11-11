import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar/navbar";

export const Layout = () => {
	return (
		<div className="font-space-grotesk relative bg-neutral-100 dark:bg-neutral-700">
			<Navbar />
			<Outlet />
		</div>
	);
};
