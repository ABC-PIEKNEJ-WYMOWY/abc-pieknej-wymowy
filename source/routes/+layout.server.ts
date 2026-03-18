import {environmentOfBuilding} from "../../building/instances/environment/environmentOfBuilding.ts";
export const csr = true as const;
export const {
	configuration: {shouldPrerender: prerender},
} = environmentOfBuilding;
export const ssr = true as const;
export const trailingSlash = `never` as const;
