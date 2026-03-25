import type {schemaForProcessEnvWithServer} from "../../../../../../../schema-for-process-env/schemaForProcessEnvWithServer.ts";
import type {TlsOfPortOfBindOfServerOfConfiguration} from "../TlsOfPortOfBindOfServerOfConfiguration.ts";
import type {z} from "zod";
export function parseTlsOfPortOfBindOfServerOfConfigurationFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvWithServer>,
): null | TlsOfPortOfBindOfServerOfConfiguration {
	switch (processEnv.SERVER__BIND__PORT__TLS__IS_ENABLED) {
		case `no`: {
			return null;
		}
		case `yes`: {
			const tls: TlsOfPortOfBindOfServerOfConfiguration = {
				intermediateCa: {
					certificate:
						processEnv.SERVER__BIND__PORT__TLS__INTERMEDIATE_CA__CERTIFICATE,
				},
				server: {
					certificate: processEnv.SERVER__BIND__PORT__TLS__SERVER__CERTIFICATE,
					privateKey: processEnv.SERVER__BIND__PORT__TLS__SERVER__PRIVATE_KEY,
				},
			};
			return tls;
		}
	}
}
