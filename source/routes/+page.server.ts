import type {SupportedEnvironmentOfBuilding} from "../../building/core/environment/supported/SupportedEnvironmentOfBuilding.ts";
import {nameOfAdapterAtBuildingTime} from "../nameOfAdapterAtBuildingTime.ts";
import type {
	OutputDataShape,
	PageServerLoad,
	PageServerLoadEvent,
	PageServerParentData,
} from "./$types.d.ts";
export const {[nameOfAdapterAtBuildingTime]: load} = {
	"Node": async function load(event: PageServerLoadEvent): Promise<void> {
		return;
	},
	"static": async function load(event: PageServerLoadEvent): Promise<void> {
		return;
	},
} satisfies {
	readonly [key in SupportedEnvironmentOfBuilding[`configuration`][`adapter`][`name`]]: PageServerLoad<
		OutputDataShape<PageServerParentData>
	>;
};
