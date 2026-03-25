import {createEnvironmentOfSourceFromProcessEnv} from "../../core/environment/creating-from-process-env/createEnvironmentOfSourceFromProcessEnv.ts";
import type {SupportedEnvironmentOfSource} from "../../core/environment/supported/SupportedEnvironmentOfSource.ts";
import {schemaForProcessEnvOfSource} from "../../core/schema-for-process-env/schemaForProcessEnvOfSource.ts";
import {z} from "zod";
const resultOfParsing: z.ZodSafeParseResult<
	z.output<typeof schemaForProcessEnvOfSource>
> = schemaForProcessEnvOfSource.safeParse(process.env);
if (!resultOfParsing.success) {
	console.error(
		`An error occurred while loading the config from the environment variables:
${z.prettifyError(resultOfParsing.error)}`,
	);
	process.exit(1);
}
export const environmentOfSource: SupportedEnvironmentOfSource =
	createEnvironmentOfSourceFromProcessEnv(resultOfParsing.data);
