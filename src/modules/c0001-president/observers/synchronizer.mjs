import { Duplex, Transform, PassThrough, Writable } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import pathResolver from "../../../shared/utils/path.mjs";
import https from "node:https";
const cityPull = [];
const statePull = [];

export default class Synchronizer {
  update({ kind, uf, file }) {
    console.log(
      `[${kind}]: [synchronizer] will update [${uf}/${file}] to a new version`
    );

    const { externalURL, localPath } = pathResolver(uf, file);

    const synchStream = Duplex({
      write(chunk, enc, callback) {
        callback();
      },
      read() {},
    });

    const prePull = Transform({
      transform(chunk, enc, callback) {
        if (kind === "global") {
          callback(null, chunk);
        }
        if (kind === "city") {
          cityPull.push(chunk);
        } else {
          statePull.push(chunk);
        }
      },
    });

    const pull = Transform({
      transform(chunk, enc, callback) {
        statePull.length && statePull.splice(statePull.length - 1, 1);
        cityPull.length && cityPull.splice(cityPull.length - 1, 1);

        callback(null, chunk.toUpperCase());
      },
    });

    const getExternalData = Transform({
      transform(chunk, enc, callback) {
        const { externalURL } = JSON.parse(chunk);
        https.get(externalURL, (response) => {
          let data = "";
          response.on("data", (chunk) => {
            data += chunk;
          });
          response.on("end", () => {
            callback(null, data);
          });
        });
      },
    });

    synchStream.push(JSON.stringify({ externalURL, localPath, kind }));

    synchStream
      // Get external data
      .pipe(getExternalData)
      // Create file
      .pipe(createWriteStream(localPath));
  }
}
const synch = new Synchronizer();

synch.update({
  kind: "state",
  uf: "sp",
  file: "sp-c0001-e000545-v.json",
});

synch.update({
  kind: "global",
  uf: "br",
  file: "br-c0001-e000545-v.json",
});
