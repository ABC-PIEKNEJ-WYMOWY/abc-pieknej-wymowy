import type {AdapterOfConfiguration} from "../../configuration/adapter/AdapterOfConfiguration.ts";
export type ConfigurationOfEnvironmentOfSource<
	AdapterToUse extends AdapterOfConfiguration<string>,
> = {readonly adapter: AdapterToUse};
