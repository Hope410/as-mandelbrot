import wasmBuilder from "../assembly/wasm/index.wasm";
import AdderModule from "../assembly/types";

wasmBuilder<typeof AdderModule>({
  env: {
    memory: new WebAssembly.Memory({ initial: 1 }),
    abort: () => {}
  }
}).then((wasm) => {
  const {
    add,
    mult
  } = wasm.instance.exports;
  document.write("ADD! 1 + 2 = " + add(1, 2));
  document.write("MULT! 2 * 4 = " + mult(2, 4));
});
