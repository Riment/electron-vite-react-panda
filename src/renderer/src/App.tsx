import { useRef, useState } from "react";

import { DesktopIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import { AnimatePresence } from "motion/react";
import { Toaster, toast } from "sonner";

import { css } from "@styled-system/css";
import { Center, Stack, Wrap } from "@styled-system/jsx";
import { button } from "@styled-system/recipes";

import { ClearableInput } from "./components/Input/ClearableInput";
import { Modal } from "./components/Modal";
import { Popup } from "./components/Popup";
import { Tooltiper } from "./components/Tooltiper";

import "@renderer/styles/index.css";

import electronLogo from "@assets/electron.svg";
import pandaLogo from "@assets/panda.svg";
import reactLogo from "@assets/react.svg";
import viteLogo from "@assets/vite.svg";

const LogoStyle = css({
	"& > a": {
		w: "50px",
		h: "50px",
		willChange: "filter",
		transition: "filter 300ms",
		_hover: {
			filter: "drop-shadow(0 0 2em #61dafbaa)",
		},
		"& > img": {
			w: "100%",
			h: "100%",
		},
	},
});

function App(): JSX.Element {
	const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [count, setCount] = useState<number>(0);

	const inputRef = useRef<string>("");

	const sendData = async (): Promise<void> => {
		try {
			await window.electron.setData({ message: inputRef?.current || "", value: count });
			toast.success("IPC data sent successfully!");
		} catch (err) {
			console.error(err);
			toast.error("IPC error.");
		}
	};

	const requestOS = async (): Promise<void> => {
		try {
			const os = await window.electron.getOS();
			toast.success(`Your operating system version is: ${os}`);
		} catch (err) {
			console.error(err);
			toast.error("Error.");
		}
	};

	return (
		<>
			<Toaster
				position="bottom-center"
				richColors
				pauseWhenPageIsHidden
				closeButton
				toastOptions={{
					duration: 3000,
					style: {
						fontFamily: "Inter-Medium",
						fontSize: "15px",
						borderRadius: "20px",
						paddingRight: "50px",
					},
					classNames: {
						closeButton: css({
							w: "30px!",
							h: "30px!",
							p: "5px!",
							top: "0!",
							bottom: "0!",
							right: "10px!",
							left: "unset!",
							my: "auto!",
							transform: "unset!",
							"& > svg": {
								w: "100%",
								h: "100%",
							},
						}),
					},
				}}
			/>

			<Stack justify="center" minH="100%" p={10} gap="70px">
				<Center flexDir="column" gap="10px">
					<Wrap justify="center" gap="20px" className={LogoStyle}>
						<a href="https://www.electronjs.org" target="_blank" rel="noreferrer">
							<img src={electronLogo} alt="Electron logo" />
						</a>
						<a href="https://vite.dev" target="_blank" rel="noreferrer">
							<img src={viteLogo} alt="Vite logo" />
						</a>
						<a href="https://react.dev" target="_blank" rel="noreferrer">
							<img src={reactLogo} alt="React logo" />
						</a>
						<a href="https://panda-css.com" target="_blank" rel="noreferrer">
							<img src={pandaLogo} alt="Panda CSS logo" />
						</a>
					</Wrap>

					<h1 className={css({ fontSize: "title", fontFamily: "bold", color: "--white" })}>Electron + Vite + React + Panda CSS</h1>
				</Center>

				<Stack align="center" gap="30px">
					<Stack align="center">
						<h2 className={css({ color: "--gray-8" })}>React Test</h2>

						<button className={button({ color: "outline" })} onClick={() => setCount((count) => count + 1)}>
							count is {count}
						</button>
					</Stack>

					<Stack align="center">
						<h2 className={css({ color: "--gray-8" })}>Component Examples</h2>

						<Stack align="center">
							<ClearableInput placeholder="IPC message" onUpdate={(value) => (inputRef.current = value)} />

							<Wrap justify="center">
								<button className={button()} onClick={() => setIsPopupOpen(true)}>
									Open Popup
								</button>

								<button className={button()} onClick={() => setIsModalOpen(true)}>
									Open Modal
								</button>
							</Wrap>
						</Stack>
					</Stack>

					<Stack align="center">
						<h2 className={css({ color: "--gray-8" })}>Electron IPC Test</h2>

						<Wrap justify="center">
							<Tooltiper text="Send data to the main process" side="top">
								<button className={button()} onClick={sendData}>
									Send Data
									<PaperPlaneIcon />
								</button>
							</Tooltiper>

							<Tooltiper text="Get your current os version" side="top">
								<button className={button()} onClick={requestOS}>
									Get OS
									<DesktopIcon />
								</button>
							</Tooltiper>
						</Wrap>
					</Stack>
				</Stack>

				<Stack align="center" textAlign="center">
					<p className={css({ color: "--gray-10" })}>Edit a file and save to test HMR</p>
					<p className={css({ color: "--gray-8" })}>Click on the Electron, Vite, React and Panda CSS logos to learn more</p>
				</Stack>
			</Stack>

			<AnimatePresence>
				{isPopupOpen && (
					<Popup
						title="This is a popup"
						message="Lorem ipsum dolor sit amet."
						description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
						type="info"
						onConfirm={() => setIsPopupOpen(false)}
					/>
				)}
			</AnimatePresence>

			<Modal isOpen={isModalOpen} title="This is a modal" onClose={() => setIsModalOpen(false)}>
				<p className={css({ fontSize: "default" })}>
					{
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et justo ut tortor efficitur rutrum. Praesent elit mauris, imperdiet non risus ac, tristique mattis orci. Sed rutrum tincidunt mi ut convallis. Phasellus laoreet purus at accumsan tincidunt. Duis eu hendrerit nibh. Duis mi urna, rhoncus sed tincidunt et, posuere et sapien. Sed non laoreet ex. Maecenas rhoncus dui cursus nisi scelerisque rutrum. Fusce porttitor imperdiet tellus vitae interdum. Aliquam sagittis nibh dolor, nec vulputate est feugiat ac. Integer id ligula in erat malesuada elementum. Nulla sit amet turpis non mi suscipit pharetra. Nunc ultricies in enim ut suscipit. Maecenas rutrum ante sit amet fringilla maximus. Vivamus ac orci sed purus rutrum feugiat."
					}
				</p>
			</Modal>
		</>
	);
}

export default App;
