import type {schemaForProcessEnvOfSource} from "../../../../../../schema-for-process-env/schemaForProcessEnvOfSource.ts";
import type {SupportedAdapterOfConfigurationOfEnvironmentOfSource} from "../supported/SupportedAdapterOfConfigurationOfEnvironmentOfSource.ts";
import type {z} from "zod";
export function parseAdapterOfConfigurationFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfSource>,
): SupportedAdapterOfConfigurationOfEnvironmentOfSource {
	switch (processEnv.ADAPTER__NAME) {
		/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */
		case null: {
			return null;
		}
	}
}
