import type {schemaForProcessEnvOfTesting} from "../../../../../../../schema-for-process-env/schemaForProcessEnvOfTesting.ts";
import type {TagOfDockerImageOfDebianOfConfigurationOfTesting} from "../TagOfDockerImageOfDebianOfConfigurationOfTesting.ts";
import type {z} from "zod";
export function parseTagOfDockerImageOfDebianOfConfigurationOfTestingFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfTesting>,
): TagOfDockerImageOfDebianOfConfigurationOfTesting {
	const tag: TagOfDockerImageOfDebianOfConfigurationOfTesting = {
		date: processEnv.DEBIAN__DOCKER_IMAGE__TAG__DATE,
	};
	return tag;
}
