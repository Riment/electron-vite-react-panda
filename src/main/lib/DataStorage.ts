import { version } from "node:os";

import { DataSchema } from "@shared/schemas";
import { GetOS, SetData } from "@shared/types";

export const setData: SetData = async (data) => {
	DataSchema.parse(data);

	console.log("IPC data:", data);
};

export const getOS: GetOS = async () => {
	return version();
};
