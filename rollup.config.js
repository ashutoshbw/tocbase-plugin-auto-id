import { terser } from 'rollup-plugin-terser';
const input = ["src/index.js"];

const terserConfig = {
  ecma: 2022,
  mangle: { 
    toplevel: true,
    keep_fnames: /autoID/,
  },
  compress: {
    module: true,
    toplevel: true,
    unsafe_arrows: true,
    drop_console: true,
    drop_debugger: true,
  },
  output: { quote_style: 1 }
};

export default [
  // UMD
  {
    input,
    watch: {
      include: './src/**',
      clearScreen: false
    },
    output: {
      file: `./dist/cdn.umd.min.js`,
      format: 'umd',
      name: "autoID",
      exports: "default",
      plugins: [terser(terserConfig)],
    },
  },
  // CJS and ESM
  {
    input,
    output: [
      {
        file: `./dist/cdn.es.min.js`,
        format: "es",
        exports: "default",
        plugins: [terser(terserConfig)],
      },
      {
        file: `./dist/index.js`,
        format: "es",
        exports: "default",
      },
      {
        file: `./dist/index.cjs`,
        format: "cjs",
        exports: "default",
      },
    ],
  }
]
