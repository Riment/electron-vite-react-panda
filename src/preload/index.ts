import { contextBridge, ipcRenderer } from "electron";

import { GetOS, SetData } from "@shared/types";

if (!process.contextIsolated) {
	throw new Error("ContextIsolation must be enabled in the BrowserWindow");
}

try {
	contextBridge.exposeInMainWorld("electron", {
		setData: (...args: Parameters<SetData>) => ipcRenderer.send("setData", ...args),
		getOS: (...args: Parameters<GetOS>) => ipcRenderer.invoke("getOS", ...args),
	});
} catch (error) {
	console.error(error);
}
