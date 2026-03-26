import type {TlsOfPortOfBindOfServerOfConfiguration} from "../../../configuration/server/fields/bind/fields/port/fields/tls/TlsOfPortOfBindOfServerOfConfiguration.ts";
import * as http from "node:http";
import * as https from "node:https";
export async function determineServer(
	dataOfTls: null | TlsOfPortOfBindOfServerOfConfiguration,
	handler: http.RequestListener,
): Promise<http.Server | https.Server> {
	if (dataOfTls === null) {
		const server: http.Server = http.createServer({}, handler);
		return server;
	} else {
		const server: https.Server = https.createServer(
			{
				ca: dataOfTls.intermediateCa.certificate,
				cert: dataOfTls.server.certificate,
				key: dataOfTls.server.privateKey,
			},
			handler,
		);
		return server;
	}
}
