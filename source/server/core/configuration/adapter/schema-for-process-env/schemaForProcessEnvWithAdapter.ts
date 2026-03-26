import {z} from "zod";
export const schemaForProcessEnvWithAdapter = z.union([
	z.object({ADAPTER__NAME: z.literal(`Node`)}),
	z.object({ADAPTER__NAME: z.literal(`static`)}),
]);
