import type {schemaForProcessEnvWithServer} from "../../../schema-for-process-env/schemaForProcessEnvWithServer.ts";
import type {BindOfServerOfConfiguration} from "../BindOfServerOfConfiguration.ts";
import {parsePortOfBindOfServerOfConfigurationFromProcessEnv} from "../fields/port/parsing-from-process-env/parsePortOfBindOfServerOfConfigurationFromProcessEnv.ts";
import type {PortOfBindOfServerOfConfiguration} from "../fields/port/PortOfBindOfServerOfConfiguration.ts";
import type {z} from "zod";
export function parseBindOfServerOfConfigurationFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvWithServer>,
): BindOfServerOfConfiguration {
	const portOfBind: PortOfBindOfServerOfConfiguration =
		parsePortOfBindOfServerOfConfigurationFromProcessEnv(processEnv);
	const bind: BindOfServerOfConfiguration = {
		address: processEnv.SERVER__BIND__ADDRESS,
		port: portOfBind,
	};
	return bind;
}
