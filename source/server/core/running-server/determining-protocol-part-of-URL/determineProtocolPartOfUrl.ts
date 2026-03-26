import type {TlsOfPortOfBindOfServerOfConfiguration} from "../../configuration/server/fields/bind/fields/port/fields/tls/TlsOfPortOfBindOfServerOfConfiguration.ts";
export function determineProtocolPartOfUrl(
	dataOfTls: null | TlsOfPortOfBindOfServerOfConfiguration,
): `http` | `https` {
	if (dataOfTls === null) {
		return `http` as const satisfies string;
	} else {
		return `https` as const satisfies string;
	}
}
