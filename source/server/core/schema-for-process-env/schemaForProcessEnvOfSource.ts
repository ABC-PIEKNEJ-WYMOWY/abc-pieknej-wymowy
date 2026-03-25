import {schemaForProcessEnvWithServer} from "../configuration/server/schema-for-process-env/schemaForProcessEnvWithServer.ts";
import {z} from "zod";
export const schemaForProcessEnvOfSource = z.union([
	z.intersection(
		z.object({ADAPTER__NAME: z.literal(`Node`)}),
		schemaForProcessEnvWithServer,
	),
	z.object({ADAPTER__NAME: z.literal(`static`)}),
]);
