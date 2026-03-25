import {createEnvironmentOfDevelopmentFromProcessEnv} from "../../core/environment/creating-from-process-env/createEnvironmentOfDevelopmentFromProcessEnv.ts";
import type {EnvironmentOfDevelopment} from "../../core/environment/EnvironmentOfDevelopment.ts";
import {schemaForProcessEnvOfDevelopment} from "../../core/schema-for-process-env/schemaForProcessEnvOfDevelopment.ts";
import {z} from "zod";
const resultOfParsing: z.ZodSafeParseResult<
	z.output<typeof schemaForProcessEnvOfDevelopment>
> = schemaForProcessEnvOfDevelopment.safeParse(process.env);
if (!resultOfParsing.success) {
	console.error(
		`An error occurred while loading the config from the environment variables:
${z.prettifyError(resultOfParsing.error)}`,
	);
	process.exit(1);
}
export const environmentOfDevelopment: EnvironmentOfDevelopment =
	createEnvironmentOfDevelopmentFromProcessEnv(resultOfParsing.data);
