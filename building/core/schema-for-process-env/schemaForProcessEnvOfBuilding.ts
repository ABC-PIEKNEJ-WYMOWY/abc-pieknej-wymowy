import {schemaForProcessEnvWithAdapter} from "../../../source/server/core/configuration/adapter/schema-for-process-env/schemaForProcessEnvWithAdapter.ts";
import {z} from "zod";
export const schemaForProcessEnvOfBuilding = z.intersection(
	z.object({}),
	schemaForProcessEnvWithAdapter,
);
