import { Cross2Icon } from "@radix-ui/react-icons";

import { cx } from "@styled-system/css";
import { button } from "@styled-system/recipes";

type CloseModalButtonProps = {
	className?: string;
	onClick?: () => void;
};

export const CloseModalButton = ({ className = "", onClick }: CloseModalButtonProps): JSX.Element => {
	return (
		<button type="button" className={cx(button({ visual: "close", color: "transparent" }), className)} onClick={onClick}>
			<Cross2Icon />
		</button>
	);
};
