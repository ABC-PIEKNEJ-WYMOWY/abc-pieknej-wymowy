import type {TlsOfPortOfBindOfServerOfConfiguration} from "../../configuration/server/fields/bind/fields/port/fields/tls/TlsOfPortOfBindOfServerOfConfiguration.ts";
import {determineServer} from "./determining/determineServer.ts";
import type * as http from "node:http";
import {dirname} from "node:path";
import {fileURLToPath} from "node:url";
export async function createServer(
	configuration: null | TlsOfPortOfBindOfServerOfConfiguration,
): Promise<
	http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>
> {
	/*
		eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		----------------------------------------------------------------
		The handler gets generated during the building process, so we need to import it dynamically.
	*/
	const {handler: handler}: {readonly handler: http.RequestListener} =
		await import(
			/* @vite-ignore */ `${dirname(fileURLToPath(import.meta.url))}/../../handler.js`
		);
	const server: http.Server = await determineServer(configuration, handler);
	return server;
}
