import type {schemaForProcessEnvOfTesting} from "../../schema-for-process-env/schemaForProcessEnvOfTesting.ts";
import type {ConfigurationOfTesting} from "../ConfigurationOfTesting.ts";
import type {DebianOfConfigurationOfTesting} from "../fields/Debian/DebianOfConfigurationOfTesting.ts";
import {parseDebianOfConfigurationOfTestingFromProcessEnv} from "../fields/Debian/parsing-from-process-env/parseDebianOfConfigurationOfTestingFromProcessEnv.ts";
import type {NodeJsOfConfigurationOfTesting} from "../fields/Node.js/NodeJsOfConfigurationOfTesting.ts";
import {parseNodeJsOfConfigurationOfTestingFromProcessEnv} from "../fields/Node.js/parsing-from-process-env/parseNodeJsOfConfigurationOfTestingFromProcessEnv.ts";
import type {z} from "zod";
export function parseConfigurationOfTestingFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfTesting>,
): ConfigurationOfTesting {
	const debianOfConfigurationOfTesting: DebianOfConfigurationOfTesting =
		parseDebianOfConfigurationOfTestingFromProcessEnv(processEnv);
	const nodeJsOfConfigurationOfTesting: NodeJsOfConfigurationOfTesting =
		parseNodeJsOfConfigurationOfTestingFromProcessEnv(processEnv);
	const configurationOfTesting: ConfigurationOfTesting = {
		debian: debianOfConfigurationOfTesting,
		nodeJs: nodeJsOfConfigurationOfTesting,
	};
	return configurationOfTesting;
}
