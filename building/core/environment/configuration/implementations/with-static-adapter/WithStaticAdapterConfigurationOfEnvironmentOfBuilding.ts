import type {StaticAdapterOfConfiguration} from "../../../../../../source/server/core/configuration/adapter/implementations/static/StaticAdapterOfConfiguration.ts";
import type {ConfigurationOfEnvironmentOfBuilding} from "../../ConfigurationOfEnvironmentOfBuilding.ts";
export type WithStaticAdapterConfigurationOfEnvironmentOfBuilding =
	ConfigurationOfEnvironmentOfBuilding<StaticAdapterOfConfiguration, true>;
