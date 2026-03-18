import type {AdapterOfConfiguration} from "../../../../source/server/core/configuration/adapter/AdapterOfConfiguration.ts";
export type ConfigurationOfEnvironmentOfBuilding<
	AdapterToUse extends AdapterOfConfiguration<string>,
	ShouldPrerender extends boolean,
> = {readonly adapter: AdapterToUse; readonly shouldPrerender: ShouldPrerender};
