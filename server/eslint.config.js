export default [
  {
    files: ["**/*.js", "**/*.ts"], // only check the .js files in server dir
    rules: {
      semi: "warn",

      "no-unused-vars": "warn",
    },
  },
];
