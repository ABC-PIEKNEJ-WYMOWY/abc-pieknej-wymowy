import type {WithStaticAdapterConfigurationOfEnvironmentOfSource} from "../../configuration/implementations/with-static-adapter/WithStaticAdapterConfigurationOfEnvironmentOfSource.ts";
import type {EnvironmentOfSource} from "../../EnvironmentOfSource.ts";
export type WithStaticAdapterEnvironmentOfSource = EnvironmentOfSource<
	WithStaticAdapterConfigurationOfEnvironmentOfSource,
	`withStaticAdapter`
>;
