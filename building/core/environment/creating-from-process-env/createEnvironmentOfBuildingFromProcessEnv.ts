import type {schemaForProcessEnvOfBuilding} from "../../schema-for-process-env/schemaForProcessEnvOfBuilding.ts";
import type {WithNodeAdapterEnvironmentOfBuilding} from "../implementations/with-Node-adapter/WithNodeAdapterEnvironmentOfBuilding.ts";
import type {WithStaticAdapterEnvironmentOfBuilding} from "../implementations/with-static-adapter/WithStaticAdapterEnvironmentOfBuilding.ts";
import type {SupportedEnvironmentOfBuilding} from "../supported/SupportedEnvironmentOfBuilding.ts";
import createNodeAdapter from "@sveltejs/adapter-node";
import createStaticAdapter from "@sveltejs/adapter-static";
import type {Adapter} from "@sveltejs/kit";
import type {z} from "zod";
export function createEnvironmentOfBuildingFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfBuilding>,
): SupportedEnvironmentOfBuilding {
	switch (processEnv.ADAPTER__NAME) {
		case `Node`: {
			const adapter: Adapter = createNodeAdapter({});
			const environment: WithNodeAdapterEnvironmentOfBuilding = {
				adapter: adapter,
				configuration: {adapter: {name: `Node`}, shouldPrerender: false},
				type: `withNodeAdapter`,
			};
			return environment;
		}
		case `static`: {
			const adapter: Adapter = createStaticAdapter({});
			const environment: WithStaticAdapterEnvironmentOfBuilding = {
				adapter: adapter,
				configuration: {adapter: {name: `static`}, shouldPrerender: true},
				type: `withStaticAdapter`,
			};
			return environment;
		}
	}
}
