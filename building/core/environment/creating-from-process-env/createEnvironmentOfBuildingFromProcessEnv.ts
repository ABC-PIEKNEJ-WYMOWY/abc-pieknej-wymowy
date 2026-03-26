import type {schemaForProcessEnvOfBuilding} from "../../schema-for-process-env/schemaForProcessEnvOfBuilding.ts";
import {parseWithNodeAdapterConfigurationOfEnvironmentOfBuildingFromProcessEnv} from "../fields/configuration/implementations/with-Node-adapter/parsing-from-process-env/parseWithNodeAdapterConfigurationOfEnvironmentOfBuildingFromProcessEnv.ts";
import type {WithNodeAdapterConfigurationOfEnvironmentOfBuilding} from "../fields/configuration/implementations/with-Node-adapter/WithNodeAdapterConfigurationOfEnvironmentOfBuilding.ts";
import {parseWithStaticAdapterConfigurationOfEnvironmentOfBuildingFromProcessEnv} from "../fields/configuration/implementations/with-static-adapter/parsing-from-process-env/parseWithStaticAdapterConfigurationOfEnvironmentOfBuildingFromProcessEnv.ts";
import type {WithStaticAdapterConfigurationOfEnvironmentOfBuilding} from "../fields/configuration/implementations/with-static-adapter/WithStaticAdapterConfigurationOfEnvironmentOfBuilding.ts";
import {parseWithoutAdapterConfigurationOfEnvironmentOfBuildingFromProcessEnv} from "../fields/configuration/implementations/without-adapter/parsing-from-process-env/parseWithoutAdapterConfigurationOfEnvironmentOfBuildingFromProcessEnv.ts";
import type {WithoutAdapterConfigurationOfEnvironmentOfBuilding} from "../fields/configuration/implementations/without-adapter/WithoutAdapterConfigurationOfEnvironmentOfBuilding.ts";
import type {WithNodeAdapterEnvironmentOfBuilding} from "../implementations/with-Node-adapter/WithNodeAdapterEnvironmentOfBuilding.ts";
import type {WithStaticAdapterEnvironmentOfBuilding} from "../implementations/with-static-adapter/WithStaticAdapterEnvironmentOfBuilding.ts";
import type {WithoutAdapterEnvironmentOfBuilding} from "../implementations/without-adapter/WithoutAdapterEnvironmentOfBuilding.ts";
import type {SupportedEnvironmentOfBuilding} from "../supported/SupportedEnvironmentOfBuilding.ts";
import createNodeAdapter from "@sveltejs/adapter-node";
import createStaticAdapter from "@sveltejs/adapter-static";
import type {Adapter} from "@sveltejs/kit";
import type {z} from "zod";
export function createEnvironmentOfBuildingFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfBuilding>,
): SupportedEnvironmentOfBuilding {
	switch (processEnv.ADAPTER__NAME) {
		case `Node`: {
			const adapterOfEnvironment: Adapter = createNodeAdapter({});
			const configurationOfEnvironment: WithNodeAdapterConfigurationOfEnvironmentOfBuilding =
				parseWithNodeAdapterConfigurationOfEnvironmentOfBuildingFromProcessEnv(
					processEnv,
				);
			const environment: WithNodeAdapterEnvironmentOfBuilding = {
				adapter: adapterOfEnvironment,
				configuration: configurationOfEnvironment,
				type: `withNodeAdapter`,
			};
			return environment;
		}
		case `static`: {
			const adapter: Adapter = createStaticAdapter({});
			const configurationOfEnvironment: WithStaticAdapterConfigurationOfEnvironmentOfBuilding =
				parseWithStaticAdapterConfigurationOfEnvironmentOfBuildingFromProcessEnv(
					processEnv,
				);
			const environment: WithStaticAdapterEnvironmentOfBuilding = {
				adapter: adapter,
				configuration: configurationOfEnvironment,
				type: `withStaticAdapter`,
			};
			return environment;
		}
		case null: {
			const configurationOfEnvironment: WithoutAdapterConfigurationOfEnvironmentOfBuilding =
				parseWithoutAdapterConfigurationOfEnvironmentOfBuildingFromProcessEnv(
					processEnv,
				);
			const environment: WithoutAdapterEnvironmentOfBuilding = {
				adapter: null,
				configuration: configurationOfEnvironment,
				type: `withoutAdapter`,
			};
			return environment;
		}
	}
}
