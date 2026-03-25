import type {DebianOfConfigurationOfTesting} from "./fields/Debian/DebianOfConfigurationOfTesting.ts";
import type {NodeJsOfConfigurationOfTesting} from "./fields/Node.js/NodeJsOfConfigurationOfTesting.ts";
export type ConfigurationOfTesting = {
	readonly debian: DebianOfConfigurationOfTesting;
	readonly nodeJs: NodeJsOfConfigurationOfTesting;
};
