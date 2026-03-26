import type {NodeAdapterOfConfiguration} from "../../../../configuration/adapter/implementations/Node/NodeAdapterOfConfiguration.ts";
import type {ServerOfConfiguration} from "../../../../configuration/server/ServerOfConfiguration.ts";
import type {ConfigurationOfEnvironmentOfSource} from "../../ConfigurationOfEnvironmentOfSource.ts";
export type WithNodeAdapterConfigurationOfEnvironmentOfSource =
	ConfigurationOfEnvironmentOfSource<NodeAdapterOfConfiguration> & {
		readonly server: ServerOfConfiguration;
	};
