import type {AdapterOfConfiguration} from "../configuration/adapter/AdapterOfConfiguration.ts";
import type {ConfigurationOfEnvironmentOfSource} from "./configuration/ConfigurationOfEnvironmentOfSource.ts";
export type EnvironmentOfSource<
	ConfigurationToUse extends ConfigurationOfEnvironmentOfSource<
		AdapterOfConfiguration<string>
	>,
	Type extends string,
> = {readonly configuration: ConfigurationToUse; readonly type: Type};
