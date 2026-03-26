import type {WithNodeAdapterEnvironmentOfSource} from "../implementations/with-Node-adapter/WithNodeAdapterEnvironmentOfSource.ts";
import type {WithoutAdapterEnvironmentOfSource} from "../implementations/with-Node-adapter/WithoutAdapterEnvironmentOfSource.ts";
export type SupportedEnvironmentOfSource =
	| WithNodeAdapterEnvironmentOfSource
	| WithoutAdapterEnvironmentOfSource;
