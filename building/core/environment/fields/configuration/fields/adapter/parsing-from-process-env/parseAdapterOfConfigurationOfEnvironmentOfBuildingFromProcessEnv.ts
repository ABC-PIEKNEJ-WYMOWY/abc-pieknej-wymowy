import type {schemaForProcessEnvOfBuilding} from "../../../../../../schema-for-process-env/schemaForProcessEnvOfBuilding.ts";
import type {SupportedAdapterOfConfigurationOfEnvironmentOfBuilding} from "../supported/SupportedAdapterOfConfigurationOfEnvironmentOfBuilding.ts";
import type {z} from "zod";
export function parseAdapterOfConfigurationFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfBuilding>,
): SupportedAdapterOfConfigurationOfEnvironmentOfBuilding {
	switch (processEnv.ADAPTER__NAME) {
		/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */
		case null: {
			return null;
		}
	}
}
