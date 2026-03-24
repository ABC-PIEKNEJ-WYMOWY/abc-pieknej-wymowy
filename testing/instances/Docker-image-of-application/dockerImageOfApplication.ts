import {buildDockerImageOfApplication} from "../../core/building-Docker-image-of-application/buildDockerImageOfApplication.ts";
import type {TestContainer} from "testcontainers";
export const dockerImageOfApplication: TestContainer =
	await buildDockerImageOfApplication({});
