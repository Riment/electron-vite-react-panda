import { z } from "zod";

export const DataSchema = z.object({
	message: z.string(),
	value: z.number(),
});
