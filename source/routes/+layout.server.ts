import {idOfAdapterAtBuildingTime} from "../id-of-adapter/idOfAdapterAtBuildingTime.ts";
export const csr = true as const;
export const prerender =
	idOfAdapterAtBuildingTime === null ? `auto` : (
		({node: false} as const)[idOfAdapterAtBuildingTime]
	);
export const ssr = true as const;
export const trailingSlash = `never` as const;
