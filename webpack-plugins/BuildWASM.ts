import { exec } from "child_process";
import { Compiler, WebpackPluginInstance } from "webpack";

type BuildTarget = 'optimized' | 'untouched';

// Experimental
export default class BuildWASM implements WebpackPluginInstance {
    buildTarget: BuildTarget;

    constructor(buildTarget: BuildTarget) {
        this.buildTarget = buildTarget;
    }

    apply(compiler: Compiler) {
      compiler.hooks.watchRun.tap('BuildWASM', (compilation) => {
        exec(`npm run asbuild:${this.buildTarget}`, (err, stdout, stderr) => {
          if (stdout) process.stdout.write(stdout);
          if (stderr) process.stderr.write(stderr);
        });
      });
    }
}