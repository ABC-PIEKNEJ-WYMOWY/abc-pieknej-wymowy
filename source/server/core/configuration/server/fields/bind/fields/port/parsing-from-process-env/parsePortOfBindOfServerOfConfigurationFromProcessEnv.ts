import type {schemaForProcessEnvWithServer} from "../../../../../schema-for-process-env/schemaForProcessEnvWithServer.ts";
import {parseTlsOfPortOfBindOfServerOfConfigurationFromProcessEnv} from "../fields/tls/parsing-from-process-env/parseTlsOfPortOfBindOfServerOfConfigurationFromProcessEnv.ts";
import type {TlsOfPortOfBindOfServerOfConfiguration} from "../fields/tls/TlsOfPortOfBindOfServerOfConfiguration.ts";
import type {PortOfBindOfServerOfConfiguration} from "../PortOfBindOfServerOfConfiguration.ts";
import type {z} from "zod";
export function parsePortOfBindOfServerOfConfigurationFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvWithServer>,
): PortOfBindOfServerOfConfiguration {
	const tlsOfPort: null | TlsOfPortOfBindOfServerOfConfiguration =
		parseTlsOfPortOfBindOfServerOfConfigurationFromProcessEnv(processEnv);
	const port: PortOfBindOfServerOfConfiguration = {
		number: processEnv.SERVER__BIND__PORT__NUMBER,
		tls: tlsOfPort,
	};
	return port;
}
