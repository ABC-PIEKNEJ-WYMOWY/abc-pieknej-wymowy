import type {EnvironmentOfBuilding} from "../../EnvironmentOfBuilding.ts";
import type {WithoutAdapterConfigurationOfEnvironmentOfBuilding} from "../../fields/configuration/implementations/without-adapter/WithoutAdapterConfigurationOfEnvironmentOfBuilding.ts";
export type WithoutAdapterEnvironmentOfBuilding = EnvironmentOfBuilding<
	null,
	WithoutAdapterConfigurationOfEnvironmentOfBuilding,
	`withoutAdapter`
>;
