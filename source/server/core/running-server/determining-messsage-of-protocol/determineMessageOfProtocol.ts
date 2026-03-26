import type {TlsOfPortOfBindOfServerOfConfiguration} from "../../configuration/server/fields/bind/fields/port/fields/tls/TlsOfPortOfBindOfServerOfConfiguration.ts";
export function determineMessageOfProtocol(
	dataOfTls: null | TlsOfPortOfBindOfServerOfConfiguration,
): `HTTP` | `HTTPS` {
	if (dataOfTls === null) {
		return `HTTP` as const satisfies string;
	} else {
		return `HTTPS` as const satisfies string;
	}
}
