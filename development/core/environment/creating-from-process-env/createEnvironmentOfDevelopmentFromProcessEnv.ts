import {parseServerOfConfigurationFromProcessEnv} from "../../../../source/server/core/configuration/server/parsing-from-process-env/parseServerOfConfigurationFromProcessEnv.ts";
import type {ServerOfConfiguration} from "../../../../source/server/core/configuration/server/ServerOfConfiguration.ts";
import type {schemaForProcessEnvOfDevelopment} from "../../schema-for-process-env/schemaForProcessEnvOfDevelopment.ts";
import type {EnvironmentOfDevelopment} from "../EnvironmentOfDevelopment.ts";
import type {z} from "zod";
export function createEnvironmentOfDevelopmentFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfDevelopment>,
): EnvironmentOfDevelopment {
	const serverOfConfigurationOfEnvironment: ServerOfConfiguration =
		parseServerOfConfigurationFromProcessEnv(processEnv);
	const environment: EnvironmentOfDevelopment = {
		configuration: {server: serverOfConfigurationOfEnvironment},
	};
	return environment;
}
