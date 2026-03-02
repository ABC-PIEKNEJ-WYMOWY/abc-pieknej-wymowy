import type {schemaForProcessEnvOfSource} from "../../schema-for-process-env/schemaForProcessEnvOfSource.ts";
import type {EnvironmentOfSource} from "../EnvironmentOfSource.ts";
import type {z} from "zod";
export function createEnvironmentOfSourceFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfSource>,
): EnvironmentOfSource {
	const evironmentOfSource: EnvironmentOfSource = {};
	return evironmentOfSource;
}
