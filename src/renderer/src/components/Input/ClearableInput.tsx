import { ComponentProps, ReactNode, useRef, useState } from "react";

import { Cross1Icon } from "@radix-ui/react-icons";

import { css, cx } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { center } from "@styled-system/patterns";

const inputStyle = css({
	w: "100%",
	fontSize: "input",
	color: "--black",
	p: "4px 7px",
	bg: "--gray-11",
	border: "1px solid {colors.--gray-11}",
	borderRadius: "input",
	transition: "200ms ease",
	_placeholder: {
		color: "--gray-7",
	},
	_focus: {
		borderColor: "primary",
	},
});

interface InputProps extends ComponentProps<"input"> {
	clear?: boolean;
	icon?: ReactNode;
	onUpdate?: (value: string) => void;
}

export const ClearableInput = ({ clear = true, icon, className = "", value = "", onUpdate = (): void => {}, ...props }: InputProps): JSX.Element => {
	const [inputValue, setInputValue] = useState(value);
	const [isClearVisible, setClearVisibility] = useState(value != "");

	const inputRef = useRef<HTMLInputElement>(null);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const target_value = event.target.value;

		setInputValue(target_value);

		setClearVisibility(target_value.length > 0 && clear);

		onUpdate(target_value);
	};

	const clearInput = (): void => {
		setInputValue("");
		setClearVisibility(false);

		onUpdate("");

		inputRef?.current?.focus();
	};

	return (
		<Flex pos="relative">
			<input
				type="text"
				value={inputValue}
				ref={inputRef}
				{...props}
				onChange={handleChange}
				className={cx(className ? className : inputStyle, css({ pr: clear ? "25px!" : "", pl: icon ? "30px!" : "" }))}
			/>

			{icon && (
				<div
					className={center({
						pos: "absolute",
						left: "5px",
						h: "100%",
						w: "20px",
						fontSize: "input",
						color: "--black",
						p: 0,
						pointerEvents: "none",
					})}
				>
					{icon}
				</div>
			)}

			{isClearVisible && (
				<button
					className={center({
						pos: "absolute",
						right: "10px",
						h: "100%",
						w: "10px",
						color: "--black",
					})}
					type="button"
					title="Clear"
					onClick={clearInput}
				>
					<Cross1Icon />
				</button>
			)}
		</Flex>
	);
};
