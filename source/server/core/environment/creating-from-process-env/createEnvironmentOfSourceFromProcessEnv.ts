import type {schemaForProcessEnvOfSource} from "../../schema-for-process-env/schemaForProcessEnvOfSource.ts";
import {parseWithNodeAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv} from "../fields/configuration/implementations/with-Node-adapter/parsing-from-process-env/parseWithNodeAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv.ts";
import type {WithNodeAdapterConfigurationOfEnvironmentOfSource} from "../fields/configuration/implementations/with-Node-adapter/WithNodeAdapterConfigurationOfEnvironmentOfSource.ts";
import {parseWithoutAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv} from "../fields/configuration/implementations/without-adapter/parsing-from-process-env/parseWithoutAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv.ts";
import type {WithoutAdapterConfigurationOfEnvironmentOfSource} from "../fields/configuration/implementations/without-adapter/WithoutAdapterConfigurationOfEnvironmentOfSource.ts";
import type {WithNodeAdapterEnvironmentOfSource} from "../implementations/with-Node-adapter/WithNodeAdapterEnvironmentOfSource.ts";
import type {WithoutAdapterEnvironmentOfSource} from "../implementations/with-Node-adapter/WithoutAdapterEnvironmentOfSource.ts";
import type {SupportedEnvironmentOfSource} from "../supported/SupportedEnvironmentOfSource.ts";
import type {z} from "zod";
export function createEnvironmentOfSourceFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfSource>,
): SupportedEnvironmentOfSource {
	switch (processEnv.ADAPTER__NAME) {
		case `Node`: {
			const configurationOfEnvironment: WithNodeAdapterConfigurationOfEnvironmentOfSource =
				parseWithNodeAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv(
					processEnv,
				);
			const environment: WithNodeAdapterEnvironmentOfSource = {
				configuration: configurationOfEnvironment,
				type: `withNodeAdapter`,
			};
			return environment;
		}
		case null: {
			const configurationOfEnvironment: WithoutAdapterConfigurationOfEnvironmentOfSource =
				parseWithoutAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv(
					processEnv,
				);
			const environment: WithoutAdapterEnvironmentOfSource = {
				configuration: configurationOfEnvironment,
				type: `withoutAdapter`,
			};
			return environment;
		}
	}
}
