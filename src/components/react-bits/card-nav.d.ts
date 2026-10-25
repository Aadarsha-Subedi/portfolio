import type { CSSProperties, ElementType, FC, MouseEvent, ReactNode } from "react";

export interface CardNavLink {
	label: string;
	href?: string;
	ariaLabel?: string;
	[key: string]: unknown;
}

export interface CardNavItem {
	label: string;
	description?: string;
	bgColor?: string;
	textColor?: string;
	links: CardNavLink[];
}

export interface CardNavProps {
	items?: CardNavItem[];
	logo?: string | ReactNode;
	logoAlt?: string;
	logoHref?: string;
	cta?: { label: string; href?: string; onClick?: (event: MouseEvent) => void };
	theme?: "dark" | "light";
	surface?: "glass" | "solid";
	openOn?: "click" | "hover";
	cardEffect?: "rise" | "unfold" | "fade";
	stagger?: number;
	bounce?: number;
	speed?: number;
	cardHeight?: number;
	maxWidth?: number;
	accentColor?: string;
	menuLabel?: boolean;
	intro?: boolean;
	defaultOpen?: boolean;
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
	linkComponent?: ElementType;
	onLinkClick?: (link: CardNavLink, item: CardNavItem, event: MouseEvent) => void;
	ariaLabel?: string;
	className?: string;
	style?: CSSProperties;
}

declare const CardNav: FC<CardNavProps>;
export default CardNav;
