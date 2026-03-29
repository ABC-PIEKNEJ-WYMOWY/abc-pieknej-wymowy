import type {ConfigurationOfEnvironmentOfBuilding} from "./fields/configuration/ConfigurationOfEnvironmentOfBuilding.ts";
import type {AdapterOfConfigurationOfEnvironmentOfBuilding} from "./fields/configuration/fields/adapter/AdapterOfConfigurationOfEnvironmentOfBuilding.ts";
import type {Adapter} from "@sveltejs/kit";
export type EnvironmentOfBuilding<
	AdapterToUse extends Adapter | null,
	ConfigurationToUse extends
		ConfigurationOfEnvironmentOfBuilding<AdapterOfConfigurationOfEnvironmentOfBuilding<string> | null>,
	TypeToUse extends string,
> = {
	readonly adapter: AdapterToUse;
	readonly configuration: ConfigurationToUse;
	readonly type: TypeToUse;
};
