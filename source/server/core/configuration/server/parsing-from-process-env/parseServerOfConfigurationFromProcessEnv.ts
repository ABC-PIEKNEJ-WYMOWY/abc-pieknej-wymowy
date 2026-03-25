import type {BindOfServerOfConfiguration} from "../fields/bind/BindOfServerOfConfiguration.ts";
import {parseBindOfServerOfConfigurationFromProcessEnv} from "../fields/bind/parsing-from-process-env/parseBindOfServerOfConfigurationFromProcessEnv.ts";
import type {schemaForProcessEnvWithServer} from "../schema-for-process-env/schemaForProcessEnvWithServer.ts";
import type {ServerOfConfiguration} from "../ServerOfConfiguration.ts";
import type {z} from "zod";
export function parseServerOfConfigurationFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvWithServer>,
): ServerOfConfiguration {
	const bindOfServer: BindOfServerOfConfiguration =
		parseBindOfServerOfConfigurationFromProcessEnv(processEnv);
	const server: ServerOfConfiguration = {bind: bindOfServer};
	return server;
}
