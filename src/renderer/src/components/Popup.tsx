import { motion } from "motion/react";

import { css } from "@styled-system/css";
import { Flex, Stack } from "@styled-system/jsx";
import { stack } from "@styled-system/patterns";
import { button } from "@styled-system/recipes";

const PopupContainerStyle = stack({
	gap: 5,
	pos: "fixed",
	zIndex: "popup",
	inset: 0,
	w: "90vw",
	maxW: "400px",
	h: "fit-content",
	maxH: "80vh",
	m: "auto",
	p: "10px",
	bgColor: "--white",
	borderRadius: "default",
});

type PopupProps = {
	type?: "info" | "confirm" | "delete" | "error";
	title: string;
	message?: string;
	description?: string;
	onConfirm?: () => void;
	onCancel?: () => void;
};

export const Popup = ({
	type = "info",
	title = "Information",
	message = "No message.",
	description = "",
	onConfirm,
	onCancel,
}: PopupProps): JSX.Element => {
	return (
		<>
			<motion.div
				className={css({
					pos: "fixed",
					inset: 0,
					bgColor: "--black/40",
					backdropFilter: "blur(4px)",
					zIndex: "overlay",
				})}
				transition={{ duration: 0.2 }}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				onClick={onCancel}
			/>

			<motion.div
				transition={{ duration: 0.2, ease: [0.63, -0.06, 0.01, 1] }}
				initial={{ transform: "scale(0.95)", opacity: 0 }}
				animate={{ transform: "scale(1)", opacity: 1 }}
				exit={{ transform: "scale(0.95)", opacity: 0 }}
				className={PopupContainerStyle}
			>
				<Stack gap={4} px={2} overflow="hidden">
					<h1
						className={css({
							color: type === "error" || type === "delete" ? "--red" : "primary",
							fontFamily: "bold",
							fontSize: "title",
						})}
					>
						{title}
					</h1>
					<Stack gap={1} overflow="auto">
						<span className={css({ fontFamily: "medium", fontSize: "large" })}>{message}</span>
						<span className={css({ fontFamily: "regular", fontSize: "medium" })}>{description}</span>
					</Stack>
				</Stack>

				<Flex
					gap="10px"
					className={css({
						"& button": {
							flex: 1,
						},
					})}
				>
					{(type === "confirm" || type === "delete") && (
						<button className={button({ color: "cancel" })} onClick={onCancel}>
							No
						</button>
					)}

					<button className={button({ color: type === "error" || type === "delete" ? "warning" : "default" })} onClick={onConfirm}>
						{type === "confirm" || type === "delete" ? "Yes" : "OK"}
					</button>
				</Flex>
			</motion.div>
		</>
	);
};
