import { createState, useHookstate } from "@hookstate/core";

export type Theme = {
	mode: "light" | "dark";
	background: string;
	text: string;
};

export type Themes = {
	[index: string]: Theme;
};

const light: Theme = {
	mode: "light",
	background: "#ffffff",
	text: "#000000"
};

const dark: Theme = {
	mode: "dark",
	background: "#000000",
	text: "#ffffff"
};

const themes: Themes = {
	light,
	dark
};

const themeState = createState(themes[localStorage.getItem("themeMode") ?? "dark"] as Theme);

export const useThemeState = () => useHookstate(themeState);
