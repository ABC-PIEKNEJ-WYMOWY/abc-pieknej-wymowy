import {nameOfAdapterAtBuildingTime} from "../nameOfAdapterAtBuildingTime.ts";
export const csr = true as const;
export const {[nameOfAdapterAtBuildingTime]: prerender} = {
	"Node": false,
	"static": true,
};
export const ssr = true as const;
export const trailingSlash = `never` as const;
