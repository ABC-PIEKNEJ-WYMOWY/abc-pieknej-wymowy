import type {schemaForProcessEnvOfTesting} from "../../../../schema-for-process-env/schemaForProcessEnvOfTesting.ts";
import type {DebianOfConfigurationOfTesting} from "../DebianOfConfigurationOfTesting.ts";
import type {DockerImageOfDebianOfConfigurationOfTesting} from "../fields/Docker image/DockerImageOfDebianOfConfigurationOfTesting.ts";
import {parseDockerImageOfDebianOfConfigurationOfTestingFromProcessEnv} from "../fields/Docker image/parsing-from-process-env/parseDockerImageOfDebianOfConfigurationOfTestingFromProcessEnv.ts";
import type {z} from "zod";
export function parseDebianOfConfigurationOfTestingFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfTesting>,
): DebianOfConfigurationOfTesting {
	const dockerImageOfDebian: DockerImageOfDebianOfConfigurationOfTesting =
		parseDockerImageOfDebianOfConfigurationOfTestingFromProcessEnv(processEnv);
	const debian: DebianOfConfigurationOfTesting = {
		dockerImage: dockerImageOfDebian,
	};
	return debian;
}
