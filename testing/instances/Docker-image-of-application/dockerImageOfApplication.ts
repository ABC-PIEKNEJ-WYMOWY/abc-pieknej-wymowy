import {buildDockerImageOfApplication} from "../../core/building-Docker-image-of-application/buildDockerImageOfApplication.ts";
import {configurationOfTesting} from "../configuration/configurationOfTesting.ts";
import type {TestContainer} from "testcontainers";
export const dockerImageOfApplication: TestContainer =
	await buildDockerImageOfApplication({
		DEBIAN__DOCKER_IMAGE__TAG__DATE:
			configurationOfTesting.debian.dockerImage.tag.date,
		NODE_JS__VERSION: configurationOfTesting.nodeJs.version,
	});
