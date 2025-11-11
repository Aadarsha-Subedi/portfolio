interface ContainerProps {
	children: React.ReactNode;
	className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
	return (
		<div
			className={`${className} shadow-aceternity mx-auto w-full max-w-4xl bg-white dark:bg-black`}
		>
			{children}
		</div>
	);
};
