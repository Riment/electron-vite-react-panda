import * as Tooltip from "@radix-ui/react-tooltip";
import { css } from "@styled-system/css";
import { ReactNode } from "react";

const TooltipContentStyle = css({
	zIndex: "tooltip",
	maxW: "400px",
	fontSize: "default",
	fontFamily: "bold",
	lineHeight: "1",
	color: "--black",
	p: "7px 12px",
	borderRadius: "10px",
	bgColor: "--white",
	boxShadow: "0 4px 8px rgba(0, 0, 0, 0.16), 0 0px 4px rgba(0, 0, 0, 0.05)",
	userSelect: "none",
	animation: "fadeIn 400ms cubic-bezier(0.16, 1, 0.3, 1)",
});

const TooltipArrowStyle = css({
	fill: "--white",
});

type TooltipProps = {
	text: string;
	side?: "top" | "right" | "bottom" | "left";
	align?: "start" | "center" | "end";
	children?: ReactNode;
};

export const Tooltiper = ({ text = "", side = "top", align = "center", children }: TooltipProps): JSX.Element => {
	return (
		<Tooltip.Provider delayDuration={500} skipDelayDuration={0}>
			<Tooltip.Root>
				<Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
				<Tooltip.Content className={TooltipContentStyle} sideOffset={5} side={side} align={align}>
					{text}
					<Tooltip.Arrow className={TooltipArrowStyle} />
				</Tooltip.Content>
			</Tooltip.Root>
		</Tooltip.Provider>
	);
};
