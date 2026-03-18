import {createEnvironmentOfBuildingFromProcessEnv} from "../../core/environment/creating-from-process-env/createEnvironmentOfBuildingFromProcessEnv.ts";
import type {SupportedEnvironmentOfBuilding} from "../../core/environment/supported/SupportedEnvironmentOfBuilding.ts";
import {schemaForProcessEnvOfBuilding} from "../../core/schema-for-process-env/schemaForProcessEnvOfBuilding.ts";
import {z} from "zod";
const resultOfParsing: z.ZodSafeParseResult<
	z.output<typeof schemaForProcessEnvOfBuilding>
> = schemaForProcessEnvOfBuilding.safeParse(process.env);
if (!resultOfParsing.success) {
	console.error(
		`An error occurred while loading the config from the environment variables:
${z.prettifyError(resultOfParsing.error)}`,
	);
	process.exit(1);
}
export const environmentOfBuilding: SupportedEnvironmentOfBuilding =
	createEnvironmentOfBuildingFromProcessEnv(resultOfParsing.data);
