import type {WithNodeAdapterConfigurationOfEnvironmentOfSource} from "../../configuration/implementations/with-Node-adapter/WithNodeAdapterConfigurationOfEnvironmentOfSource.ts";
import type {EnvironmentOfSource} from "../../EnvironmentOfSource.ts";
export type WithNodeAdapterEnvironmentOfSource = EnvironmentOfSource<
	WithNodeAdapterConfigurationOfEnvironmentOfSource,
	`withNodeAdapter`
>;
