import { AnimatePresence, motion } from "motion/react";
import { ReactNode } from "react";
import { useKeyPressEvent } from "react-use";

import { css } from "@styled-system/css";
import { Box, Stack } from "@styled-system/jsx";
import { flex, stack } from "@styled-system/patterns";

import { CloseModalButton } from "./Button/CloseModalButton";

const ModalContainerStyle = stack({
	pos: "fixed",
	zIndex: "modal",
	inset: 0,
	w: "90vw",
	maxW: "700px",
	h: "fit-content",
	maxH: "80vh",
	m: "auto",
	p: "15px 20px",
	bgColor: "--white",
	borderRadius: "default",
});

type ModalProps = {
	isOpen: boolean;
	title: string;
	children?: ReactNode;
	onClose?: () => void;
};

export const Modal = ({ isOpen = false, title = "Information", children, onClose }: ModalProps): JSX.Element => {
	useKeyPressEvent("Escape", onClose);

	return (
		<AnimatePresence>
			{isOpen && (
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
						onClick={onClose}
					/>

					<motion.div
						transition={{ duration: 0.2, ease: [0.63, -0.06, 0.01, 1] }}
						initial={{ transform: "scale(0.95)", opacity: 0 }}
						animate={{ transform: "scale(1)", opacity: 1 }}
						exit={{ transform: "scale(0.95)", opacity: 0 }}
						className={ModalContainerStyle}
					>
						<Stack gap={5} overflow="hidden">
							<header
								className={flex({
									pos: "relative",
									justify: "space-between",
									borderBottomWidth: "1px",
									borderBottomColor: "--gray-11",
									pb: 2,
								})}
							>
								<h1 className={css({ fontSize: "title", fontFamily: "bold", color: "--black" })}>{title}</h1>

								<CloseModalButton onClick={onClose} />
							</header>

							<Box overflow="auto">{children}</Box>
						</Stack>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};
