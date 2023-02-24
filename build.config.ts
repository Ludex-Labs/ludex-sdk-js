// build.config.ts
import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ["./src/index"],
  declaration: true, // generate .d.ts files
  rollup: {
    emitCJS: true,
    dts: {
      respectExternal: false,
    },
  },
  outDir: "lib",
  externals: ["@solana/web3.js", "@solana/wallet-adapter-base"],
  failOnWarn: false,
});
