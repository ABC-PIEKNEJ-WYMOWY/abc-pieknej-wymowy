import type {schemaForProcessEnvOfSource} from "../../schema-for-process-env/schemaForProcessEnvOfSource.ts";
import {parseWithoutAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv} from "../fields/configuration/implementations/without-adapter/parsing-from-process-env/parseWithoutAdapterConfigurationOfEnvironmentOfSourceFromProcessEnv.ts";
import type {WithoutAdapterConfigurationOfEnvironmentOfSource} from "../fields/configuration/implementations/without-adapter/WithoutAdapterConfigurationOfEnvironmentOfSource.ts";
import type {WithoutAdapterEnvironmentOfSource} from "../implementations/with-Node-adapter/WithoutAdapterEnvironmentOfSource.ts";
import type {SupportedEnvironmentOfSource} from "../supported/SupportedEnvironmentOfSource.ts";
import type {z} from "zod";
export function createEnvironmentOfSourceFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfSource>,
): SupportedEnvironmentOfSource {
	switch (processEnv.ADAPTER__NAME) {
		/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */
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
