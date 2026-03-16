import type configForCommitlint from "./commitlint.config.ts";
import type {Config} from "release-it";
type TypesOfCommitFromCommitlint =
	(typeof configForCommitlint.rules)[`type-enum`][2];
export default {
	git: {
		commitArgs: [],
		commitMessage: `release: \${version}`,
		pushArgs: [],
		tagArgs: [],
	},
	hooks: {},
	npm: {publish: false},
	plugins: {
		"@release-it/conventional-changelog": {
			ignoreRecommendedBump: false,
			preset: {
				header: `# Changelog`,
				name: `conventionalcommits`,
				releaseCommitMessageFormat: `release: {{currentTag}}`,
				types: [
					{hidden: false, section: `Chores`, type: `chore`},
					{hidden: false, section: `Features`, type: `feature`},
					{hidden: false, section: `Releases`, type: `release`},
				] satisfies {
					readonly [Index in Extract<
						keyof TypesOfCommitFromCommitlint,
						`${number}`
					>]: {
						readonly hidden: boolean;
						readonly section: string;
						readonly type: TypesOfCommitFromCommitlint[Index];
					};
				} & {readonly length: TypesOfCommitFromCommitlint[`length`]},
			},
			strictSemVer: false,
		},
	},
} as const satisfies Config;
