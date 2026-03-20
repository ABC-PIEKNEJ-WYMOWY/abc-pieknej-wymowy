import {useReadFileSyncSafely} from "./using-readFileSync-safely/useReadFileSyncSafely.ts";
import {dirname, resolve} from "node:path";
import {fileURLToPath} from "node:url";
export function determineTypeOfModule(url: string): `commonjs` | `module` {
	let pathOfCurrentDirectory: string = dirname(fileURLToPath(url));
	for (;;) {
		const pathOfPackageJson: string = resolve(
			pathOfCurrentDirectory,
			`package.json`,
		);
		const contentOfPackageJson: null | Uint8Array<ArrayBuffer> =
			useReadFileSyncSafely(pathOfPackageJson);
		if (contentOfPackageJson === null) {
			const pathOfParentDirectory: string = dirname(pathOfCurrentDirectory);
			if (pathOfParentDirectory === pathOfCurrentDirectory) {
				return `commonjs`;
			} else {
				pathOfCurrentDirectory = pathOfParentDirectory;
				continue;
			}
		} else {
			const stringOfContentOfPackageJson: string = new TextDecoder(
				`utf-8`,
			).decode(contentOfPackageJson);
			const packageJson: unknown = JSON.parse(stringOfContentOfPackageJson);
			if (typeof packageJson === `object` && packageJson !== null) {
				if (
					`type` in packageJson
					&& typeof packageJson[`type`] === `string`
					&& packageJson[`type`] === `module`
				) {
					return `module`;
				} else {
					return `commonjs`;
				}
			} else {
				const error: Error = new Error(
					`Expected package.json to contain an object, but got ${typeof packageJson}`,
				);
				throw error;
			}
		}
	}
}
