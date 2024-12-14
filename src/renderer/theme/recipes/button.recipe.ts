import { defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
	className: "button",
	base: {
		transition: "100ms ease",
		cursor: "pointer",
	},
	variants: {
		visual: {
			default: {
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				gap: 2,
				fontSize: "btn",
				borderRadius: "button",
				p: "4px 7px",
			},
			close: {
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				borderRadius: "circle",
				h: "30px",
				w: "30px",
				color: "--gray-3",
			},
		},
		color: {
			default: {
				color: "--white",
				backgroundColor: "primary",
				_hover: {
					backgroundColor: "primary_hover",
				},
				_active: {
					backgroundColor: "primary_active",
				},
			},
			light: {
				color: "primary",
				backgroundColor: "primary_light",
				_hover: {
					backgroundColor: "primary_light_hover",
				},
				_active: {
					backgroundColor: "primary_light_active",
				},
			},
			outline: {
				color: "primary",
				border: "1px solid {colors.primary}",
				_hover: {
					borderColor: "primary_hover",
					color: "primary_hover",
				},
				_active: {
					borderColor: "primary_active",
					color: "primary_active",
				},
			},
			cancel: {
				color: "--black",
				backgroundColor: "--gray-11",
				_hover: {
					backgroundColor: "--gray-9",
				},
				_active: {
					backgroundColor: "--gray-8",
				},
			},
			transparent: {
				color: "primary",
				_hover: {
					backgroundColor: "primary_light_hover",
				},
			},
			warning: {
				color: "--white",
				backgroundColor: "--red",
				_hover: {
					backgroundColor: "--red-hover",
				},
				_active: {
					backgroundColor: "--red-active",
				},
			},
		},
		disabled: {
			true: {
				cursor: "default",
				pointerEvents: "none",
			},
		},
		shape: {
			default: { borderRadius: "button" },
			circle: { borderRadius: "circle" },
		},
	},
	compoundVariants: [
		{
			visual: "default",
			color: "default",
			disabled: true,
			css: {
				color: "primary",
				borderRadius: "button",
				backgroundColor: "primary_light",
				cursor: "default",
				pointerEvents: "none",
			},
		},
		{
			visual: "default",
			color: "transparent",
			disabled: true,
			css: {
				color: "--gray-8",
				borderRadius: "button",
				backgroundColor: "transparent",
				cursor: "default",
				pointerEvents: "none",
			},
		},
	],
	defaultVariants: {
		visual: "default",
		color: "default",
		shape: "default",
	},
});
