import {schemaForProcessEnvWithServer} from "../configuration/server/schema-for-process-env/schemaForProcessEnvWithServer.ts";
import {z} from "zod";
export const schemaForProcessEnvOfSource = z.intersection(
	z.object({}),
	z.union([
		z.intersection(
			z.object({ADAPTER__NAME: z.literal(`Node`)}),
			schemaForProcessEnvWithServer,
		),
	]),
);
