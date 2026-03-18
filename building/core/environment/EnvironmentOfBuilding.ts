import type {AdapterOfConfiguration} from "../../../source/server/core/configuration/adapter/AdapterOfConfiguration.ts";
import type {ConfigurationOfEnvironmentOfBuilding} from "./configuration/ConfigurationOfEnvironmentOfBuilding.ts";
import type {Adapter} from "@sveltejs/kit";
export type EnvironmentOfBuilding<
	AdapterToUse extends Adapter,
	ConfigurationToUse extends ConfigurationOfEnvironmentOfBuilding<
		AdapterOfConfiguration<string>,
		boolean
	>,
	Type extends string,
> = {
	readonly adapter: AdapterToUse;
	readonly configuration: ConfigurationToUse;
	readonly type: Type;
};
