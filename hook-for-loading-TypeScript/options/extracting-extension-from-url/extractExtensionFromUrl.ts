export function extractExtensionFromUrl(url: string): null | string {
	const indexOfLastDot: number = url.lastIndexOf(`.`);
	if (indexOfLastDot === -1) {
		return null;
	} else {
		const extension: string = url.substring(indexOfLastDot + 1);
		return extension;
	}
}
