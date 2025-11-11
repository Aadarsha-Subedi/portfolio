export interface BlogDataProps {
	title: string;
	slug: string;
	description: string;
	component: () => Promise<typeof import("*.mdx")>;
}

export const BlogData: BlogDataProps[] = [
	{
		title: "Test Blog",
		slug: "test",
		description: "A test blog for checking MDX for react.",
		component: () => import("../content/test.mdx"),
	},
	{
		title: "Final Blog",
		slug: "final",
		description: "A final blog for checking blog-data.ts file.",
		component: () => import("../content/final.mdx"),
	},
];
