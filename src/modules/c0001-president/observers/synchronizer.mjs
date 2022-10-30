import { Duplex, Transform, PassThrough } from "node:stream";

export default class synchronizer {
  update({ kind, uf, stateFile }) {
    console.log(
      `[${kind}]: [synchronizer] will update [${uf}/${stateFile}] to a new version`
    );

    const synchStream = Duplex({
      objectMode: true,
      write(chunk, enc, callback) {
        console.log(`[writable] saving`, chunk);
        callback();
      },
      read() {
        const everySecond = (intervalContext) => {
          this.counter = this.counter ?? 0;
          if (this.counter++ <= 5) {
            this.push(`My name is Erick[${this.counter}]`);
            return;
          }
          clearInterval(intervalContext);
          this.push(null);
        };

        setInterval(function () {
          everySecond(this);
        });
      },
    });
  }
}
