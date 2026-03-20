import {readFileSync} from "node:fs";
export function useReadFileSyncSafely(
	path: string,
): null | Uint8Array<ArrayBuffer> {
	try {
		const content: Uint8Array<ArrayBuffer> = readFileSync(path);
		return content;
	} catch (error: unknown) {
		if (error instanceof Error) {
			if (`code` in error && error.code === `ENOENT`) {
				return null;
			} else {
				throw error;
			}
		} else {
			const actualError: Error = new Error(`Unknown error.`, {cause: error});
			throw actualError;
		}
	}
}
