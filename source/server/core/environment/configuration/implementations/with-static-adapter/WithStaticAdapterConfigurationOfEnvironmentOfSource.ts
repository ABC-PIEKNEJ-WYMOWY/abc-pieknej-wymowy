import type {StaticAdapterOfConfiguration} from "../../../../configuration/adapter/implementations/static/StaticAdapterOfConfiguration.ts";
import type {ConfigurationOfEnvironmentOfSource} from "../../ConfigurationOfEnvironmentOfSource.ts";
export type WithStaticAdapterConfigurationOfEnvironmentOfSource =
	ConfigurationOfEnvironmentOfSource<StaticAdapterOfConfiguration>;
