import type {WithNodeAdapterEnvironmentOfBuilding} from "../implementations/with-Node-adapter/WithNodeAdapterEnvironmentOfBuilding.ts";
import type {WithoutAdapterEnvironmentOfBuilding} from "../implementations/without-adapter/WithoutAdapterEnvironmentOfBuilding.ts";
export type SupportedEnvironmentOfBuilding =
	| WithNodeAdapterEnvironmentOfBuilding
	| WithoutAdapterEnvironmentOfBuilding;
