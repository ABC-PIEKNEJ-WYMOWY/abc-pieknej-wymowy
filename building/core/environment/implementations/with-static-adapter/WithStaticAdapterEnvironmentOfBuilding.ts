import type {WithStaticAdapterConfigurationOfEnvironmentOfBuilding} from "../../configuration/implementations/with-static-adapter/WithStaticAdapterConfigurationOfEnvironmentOfBuilding.ts";
import type {EnvironmentOfBuilding} from "../../EnvironmentOfBuilding.ts";
import type {Adapter} from "@sveltejs/kit";
export type WithStaticAdapterEnvironmentOfBuilding = EnvironmentOfBuilding<
	Adapter,
	WithStaticAdapterConfigurationOfEnvironmentOfBuilding,
	`withStaticAdapter`
>;
