import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
export default {
  input: ["./src/index.js"],
  output: {
    file: "./dist/bundle.js",
    format: "umd",
    name: "experience",
  },
  plugins: [resolve(), commonjs(),babel(),terser()],
  external: ["the-answer"],
};

