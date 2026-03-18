import type {WithNodeAdapterConfigurationOfEnvironmentOfBuilding} from "../../configuration/implementations/with-Node-adapter/WithNodeAdapterConfigurationOfEnvironmentOfBuilding.ts";
import type {EnvironmentOfBuilding} from "../../EnvironmentOfBuilding.ts";
import type {Adapter} from "@sveltejs/kit";
export type WithNodeAdapterEnvironmentOfBuilding = EnvironmentOfBuilding<
	Adapter,
	WithNodeAdapterConfigurationOfEnvironmentOfBuilding,
	`withNodeAdapter`
>;
