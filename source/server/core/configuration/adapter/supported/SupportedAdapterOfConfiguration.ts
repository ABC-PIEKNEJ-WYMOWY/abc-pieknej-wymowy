import type {NodeAdapterOfConfiguration} from "../implementations/Node/NodeAdapterOfConfiguration.ts";
import type {StaticAdapterOfConfiguration} from "../implementations/static/StaticAdapterOfConfiguration.ts";
export type SupportedAdapterOfConfiguration =
	| NodeAdapterOfConfiguration
	| StaticAdapterOfConfiguration;
