import * as appEnvironment from "$app/environment";
import {runServer} from "../../core/running-server/runServer.ts";
import {runEntrypointOfSource} from "../running-entrypoint/runEntrypointOfSource.ts";
if (appEnvironment.dev) {
	const {environmentOfSource: environment} = await import(
		`../../instances/environment/environmentOfSource.ts`
	);
	switch (environment.type) {
		/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */
		case `withNodeAdapter`: {
			await runEntrypointOfSource(environment);
			break;
		}
		/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */
		case `withStaticAdapter`: {
			break;
		}
	}
} else {
	if (appEnvironment.building) {
		/*
			Building should not have an entrypoint.
		*/
	} else {
		const {environmentOfSource: environment} = await import(
			`../../instances/environment/environmentOfSource.ts`
		);
		switch (environment.type) {
			/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */
			case `withNodeAdapter`: {
				await Promise.all([
					runServer(environment.configuration.server),
					runEntrypointOfSource(environment),
				]);
				break;
			}
			/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */
			case `withStaticAdapter`: {
		}
	}
