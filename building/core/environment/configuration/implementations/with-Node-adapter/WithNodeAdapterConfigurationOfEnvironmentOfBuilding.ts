import type {NodeAdapterOfConfiguration} from "../../../../../../source/server/core/configuration/adapter/implementations/Node/NodeAdapterOfConfiguration.ts";
import type {ConfigurationOfEnvironmentOfBuilding} from "../../ConfigurationOfEnvironmentOfBuilding.ts";
export type WithNodeAdapterConfigurationOfEnvironmentOfBuilding =
	ConfigurationOfEnvironmentOfBuilding<NodeAdapterOfConfiguration, false>;
