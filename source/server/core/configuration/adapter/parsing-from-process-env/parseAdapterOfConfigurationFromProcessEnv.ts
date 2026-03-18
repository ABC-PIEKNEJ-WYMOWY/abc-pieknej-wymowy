import type {NodeAdapterOfConfiguration} from "../implementations/Node/NodeAdapterOfConfiguration.ts";
import type {StaticAdapterOfConfiguration} from "../implementations/static/StaticAdapterOfConfiguration.ts";
import type {schemaForProcessEnvWithAdapter} from "../schema-for-process-env/schemaForProcessEnvWithAdapter.ts";
import type {SupportedAdapterOfConfiguration} from "../supported/SupportedAdapterOfConfiguration.ts";
import type {z} from "zod";
export function parseAdapterOfConfigurationFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvWithAdapter>,
): SupportedAdapterOfConfiguration {
	switch (processEnv.ADAPTER__NAME) {
		case `Node`: {
			const adapterOfConfiguration: NodeAdapterOfConfiguration = {name: `Node`};
			return adapterOfConfiguration;
		}
		case `static`: {
			const adapterOfConfiguration: StaticAdapterOfConfiguration = {
				name: `static`,
			};
			return adapterOfConfiguration;
		}
	}
}
