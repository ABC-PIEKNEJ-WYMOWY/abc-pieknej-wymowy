import * as envStaticPrivate from "$env/static/private";
import type {SupportedEnvironmentOfBuilding} from "../building/core/environment/supported/SupportedEnvironmentOfBuilding.ts";
export const {ADAPTER__NAME: nameOfAdapterAtBuildingTime} =
	/* eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion */
	envStaticPrivate /* We can safely assume that, because the environment of building gets imported in svelte.config.ts */ as {
		readonly ADAPTER__NAME: SupportedEnvironmentOfBuilding[`configuration`][`adapter`][`name`];
	};
