import type {EnvironmentOfSource} from "../../EnvironmentOfSource.ts";
import type {WithoutAdapterConfigurationOfEnvironmentOfSource} from "../../fields/configuration/implementations/without-adapter/WithoutAdapterConfigurationOfEnvironmentOfSource.ts";
export type WithoutAdapterEnvironmentOfSource = EnvironmentOfSource<
	WithoutAdapterConfigurationOfEnvironmentOfSource,
	`withoutAdapter`
>;
