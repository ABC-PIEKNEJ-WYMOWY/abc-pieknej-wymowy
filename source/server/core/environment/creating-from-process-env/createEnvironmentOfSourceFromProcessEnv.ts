import {parseServerOfConfigurationFromProcessEnv} from "../../configuration/server/parsing-from-process-env/parseServerOfConfigurationFromProcessEnv.ts";
import type {ServerOfConfiguration} from "../../configuration/server/ServerOfConfiguration.ts";
import type {schemaForProcessEnvOfSource} from "../../schema-for-process-env/schemaForProcessEnvOfSource.ts";
import type {WithNodeAdapterEnvironmentOfSource} from "../implementations/with-Node-adapter/WithNodeAdapterEnvironmentOfSource.ts";
import type {WithStaticAdapterEnvironmentOfSource} from "../implementations/with-static-adapter/WithStaticAdapterEnvironmentOfSource.ts";
import type {SupportedEnvironmentOfSource} from "../supported/SupportedEnvironmentOfSource.ts";
import type {z} from "zod";
export function createEnvironmentOfSourceFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfSource>,
): SupportedEnvironmentOfSource {
	switch (processEnv.ADAPTER__NAME) {
		/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */
		case `Node`: {
			const serverOfConfigurationOfEnvironment: ServerOfConfiguration =
				parseServerOfConfigurationFromProcessEnv(processEnv);
			const environment: WithNodeAdapterEnvironmentOfSource = {
				configuration: {
					adapter: {name: `Node`},
					server: serverOfConfigurationOfEnvironment,
				},
				type: `withNodeAdapter`,
			};
			return environment;
		}
		/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */
		case `static`: {
			const environment: WithStaticAdapterEnvironmentOfSource = {
				configuration: {adapter: {name: `static`}},
				type: `withStaticAdapter`,
			};
			return environment;
		}
	}
}
