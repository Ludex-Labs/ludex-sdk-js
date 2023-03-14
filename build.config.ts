// build.config.ts
import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: [
    {
      input: "src/",
      outDir: "lib",
      builder: "mkdist",
      format: "esm",
      declaration: false,
    },
    {
      input: "src/",
      outDir: "lib",
      builder: "mkdist",
      format: "cjs",
      declaration: true,
    },
  ],
  rollup: {
    emitCJS: true,
    dts: {
      respectExternal: false,
    },
  },
  outDir: "lib",
  externals: ["@solana/web3.js", "@solana/wallet-adapter-base"],
});
