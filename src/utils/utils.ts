import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}

export interface Project {
	title: string;
	summary: string;
	description: string;
	details?: string[];
	url: string;
	badges: string[];
}
