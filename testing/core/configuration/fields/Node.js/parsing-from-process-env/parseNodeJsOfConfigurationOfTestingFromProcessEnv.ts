import type {schemaForProcessEnvOfTesting} from "../../../../schema-for-process-env/schemaForProcessEnvOfTesting.ts";
import type {NodeJsOfConfigurationOfTesting} from "../NodeJsOfConfigurationOfTesting.ts";
import type {z} from "zod";
export function parseNodeJsOfConfigurationOfTestingFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfTesting>,
): NodeJsOfConfigurationOfTesting {
	const nodeJs: NodeJsOfConfigurationOfTesting = {
		version: processEnv.NODE_JS__VERSION,
	};
	return nodeJs;
}
