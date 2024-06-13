function makeModuleNameMapper(srcPath, tsconfigPath) {
	// Get paths from tsconfig
	const { paths } = require(tsconfigPath).compilerOptions;

	const aliases = {};

	// Iterate over paths and convert them into moduleNameMapper format
	Object.keys(paths).forEach((item) => {
		const key = item.replace("/*", "/(.*)");
		const path = paths[item][0].replace("/*", "/$1");
		aliases[key] = srcPath + "/" + path;
	});
	return aliases;
}

const TS_CONFIG_PATH = "./tsconfig.base.json";
const SRC_PATH = "<rootDir>";

module.exports = {
	testRegex: "\\.spec\\.ts$",
	verbose: true,
	preset: "jest-preset-angular",
	roots: [SRC_PATH],
	globals: {
		"ts-jest": {
			tsconfig: "./tsconfig.spec.json",
			stringifyContentPathRegex: "\\.(html|svg)$",
			useESM: true,
		},
	},
	extensionsToTreatAsEsm: [".ts"],
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
	moduleNameMapper: makeModuleNameMapper(SRC_PATH, TS_CONFIG_PATH),
	moduleDirectories: ["node_modules"],
	coverageDirectory: "./coverage",
	testEnvironmentOptions: {},
};
