import { ElectronAPI } from "@electron-toolkit/preload";
import { GetOS, SetData } from "@shared/types";

declare global {
	interface Window {
		electron: {
			api: ElectronAPI;
			setData: SetData;
			getOS: GetOS;
		};
	}
}
