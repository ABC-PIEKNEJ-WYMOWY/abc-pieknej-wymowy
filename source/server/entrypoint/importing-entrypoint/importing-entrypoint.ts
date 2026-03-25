import {dev} from "$app/environment";
import {runEntrypointOfSource} from "../running-entrypoint/runEntrypointOfSource.ts";
if (dev) {
	await runEntrypointOfSource();
} else {
	/*
		Not supported yet.
	*/
}
