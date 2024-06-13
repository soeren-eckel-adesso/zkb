module.exports = {
  globals: {
    MyGlobal: true,
  },

  rules: {
    "max-len": ["error", { code: 500 }],
    quotes: [2, "double", { avoidEscape: true }],
    "no-empty": ["error", { allowEmptyCatch: true }],
    "no-console": ["error"],
    "no-dupe-keys": ["error"],
    "no-duplicate-case": ["error"],
    "no-irregular-whitespace": ["error"],
    "no-prototype-builtins": ["off"],
    "no-unreachable": ["error"],
    "no-empty-function": ["error", { allow: ["constructors"] }],
    camelcase: ["error", { properties: "always" }],
    "no-empty-pattern": ["error"],
    "no-use-before-define": ["error"],
    "no-redeclare": ["error"],
    "no-self-assign": ["error"],
    "id-match": [
      "error",
      "[a-z]([A-Za-z]*[$]?)|^(.*?(\\b_\\b)[^$]*)$|^(.*?(\\bEMPTY\\b)[^$]*)$|^(.*?(\\bT\\b)[^$]*)$|^(.*?(\\bHTTP_INTERCEPTORS\\b)[^$]*)$|^(.*?(\\bMAT_MOMENT_DATE_ADAPTER_OPTIONS\\b)[^$]*)$",
    ],
    "@typescript-eslint/no-explicit-any": "off",
    yoda: ["error"],
    eqeqeq: ["error"],
    "max-classes-per-file": ["error", 1],
    "@nrwl/nx/enforce-module-boundaries": [
      "error",
      {
        enforceBuildableLibDependency: true,
        allow: [],
        depConstraints: [
          {
            sourceTag: "type:service",
            onlyDependOnLibsWithTags: ["type:service", "type:feature", "type:repository", "type:ui", "type:util"],
          },
          {
            sourceTag: "type:element",
            onlyDependOnLibsWithTags: ["type:feature", "type:service", "type:ui", "type:util"],
          },
          {
            sourceTag: "type:feature",
            onlyDependOnLibsWithTags: ["type:feature", "type:service", "type:repository", "type:ui", "type:util"],
          },
          {
            sourceTag: "type:page",
            onlyDependOnLibsWithTags: ["type:feature", "type:service", "type:repository", "type:ui", "type:util"],
          },
          {
            sourceTag: "type:repository",
            onlyDependOnLibsWithTags: ["type:repository", "type:util"],
          },
          {
            sourceTag: "type:ui",
            onlyDependOnLibsWithTags: ["type:feature", "type:ui", "type:util"],
          },
          {
            sourceTag: "type:util",
            onlyDependOnLibsWithTags: ["type:util"],
          },
          {
            sourceTag: "type:web",
            onlyDependOnLibsWithTags: [
              "type:page",
              "type:feature",
              "type:service",
              "type:repository",
              "type:ui",
              "type:util",
              "type:http-interceptor",
            ],
          },
          {
            sourceTag: "type:http-interceptor",
            onlyDependOnLibsWithTags: ["type:service"],
          },
        ],
      },
    ],
  },
};
