import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
	"html, body, #root": {
		fontFamily: "'Inter-Regular', sans-serif",
		h: "100%",
		w: "100%",
		p: 0,
		m: 0,
		boxSizing: "border-box",
	},
	body: {
		bgColor: "#242424",
	},
	"*, ::before, ::after": {
		boxSizing: "border-box",
	},
	"select, button": {
		cursor: "pointer",
		outline: "none",
	},
	input: {
		outline: "none",
	},
	i: {
		pointerEvents: "none",
	},
	svg: {
		fill: "currentColor",
		pointerEvents: "none",
	},
	"::selection": {
		backgroundColor: "primary",
		color: "--white",
	},
});
