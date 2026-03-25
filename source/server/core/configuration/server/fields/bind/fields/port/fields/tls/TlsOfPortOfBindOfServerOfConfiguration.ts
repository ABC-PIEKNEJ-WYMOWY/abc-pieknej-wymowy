export type TlsOfPortOfBindOfServerOfConfiguration = {
	readonly intermediateCa: {readonly certificate: string};
	readonly server: {readonly certificate: string; readonly privateKey: string};
};
