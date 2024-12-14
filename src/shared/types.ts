import { z } from "zod";
import { DataSchema } from "./schemas";

export type DataSchemaType = z.infer<typeof DataSchema>;

export type SetData = (data: DataSchemaType) => Promise<void>;
export type GetOS = () => Promise<string>;
