import type {schemaForProcessEnvOfTesting} from "../../../../../../schema-for-process-env/schemaForProcessEnvOfTesting.ts";
import type {DockerImageOfDebianOfConfigurationOfTesting} from "../DockerImageOfDebianOfConfigurationOfTesting.ts";
import {parseTagOfDockerImageOfDebianOfConfigurationOfTestingFromProcessEnv} from "../tag/parsing-from-process-env/parseTagOfDockerImageOfDebianOfConfigurationOfTestingFromProcessEnv.ts";
import type {TagOfDockerImageOfDebianOfConfigurationOfTesting} from "../tag/TagOfDockerImageOfDebianOfConfigurationOfTesting.ts";
import type {z} from "zod";
export function parseDockerImageOfDebianOfConfigurationOfTestingFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfTesting>,
): DockerImageOfDebianOfConfigurationOfTesting {
	const tagOfDockerImage: TagOfDockerImageOfDebianOfConfigurationOfTesting =
		parseTagOfDockerImageOfDebianOfConfigurationOfTestingFromProcessEnv(
			processEnv,
		);
	const dockerImage: DockerImageOfDebianOfConfigurationOfTesting = {
		tag: tagOfDockerImage,
	};
	return dockerImage;
}
