import type {PortOfBindOfServerOfConfiguration} from "./fields/port/PortOfBindOfServerOfConfiguration.ts";
export type BindOfServerOfConfiguration = {
	readonly address: string;
	readonly port: PortOfBindOfServerOfConfiguration;
};
