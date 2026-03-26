import type {schemaForProcessEnvOfBuilding} from "../../../../../../schema-for-process-env/schemaForProcessEnvOfBuilding.ts";
import type {NodeAdapterOfConfigurationOfEnvironmentOfBuilding} from "../implementations/Node/NodeAdapterOfConfigurationOfEnvironmentOfBuilding.ts";
import type {SupportedAdapterOfConfigurationOfEnvironmentOfBuilding} from "../supported/SupportedAdapterOfConfigurationOfEnvironmentOfBuilding.ts";
import type {z} from "zod";
export function parseAdapterOfConfigurationFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfBuilding>,
): SupportedAdapterOfConfigurationOfEnvironmentOfBuilding {
	switch (processEnv.ADAPTER__NAME) {
		case `Node`: {
			const adapter: NodeAdapterOfConfigurationOfEnvironmentOfBuilding = {
				id: `node`,
			};
			return adapter;
		}
		case null: {
			return null;
		}
	}
}
