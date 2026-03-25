import * as appEnvironment from "$app/environment";
import {runEntrypointOfSource} from "../running-entrypoint/runEntrypointOfSource.ts";
if (appEnvironment.dev) {
	await runEntrypointOfSource();
} else {
	if (appEnvironment.building) {
		/*
			Building should not have an entrypoint.
		*/
	} else {
		await runEntrypointOfSource();
	}
}
