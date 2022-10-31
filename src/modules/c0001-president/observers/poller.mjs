import { Duplex, Transform, PassThrough, Writable } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import pathResolver from "../../../shared/utils/path.mjs";
import https from "node:https";
import VoteSubject from "../subjects/voteSubject.mjs";
import Vote from "../events/vote.mjs";
const cityPull = [];
const statePull = [];

export default class Poller {
  update({ uf, file }) {
    console.log(
      `[poller]: will verify new file versions triggered by [${uf}/${file}]`
    );

    const { externalURL, localPath } = pathResolver(uf, file);

    const pollerStream = Duplex({
      write(chunk, enc, callback) {
        callback();
      },
      read() {},
    });

    const getExternalFile = Transform({
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

    const getLocalFile = Transform({
      transform(chunk, enc, callback) {},
    });

    const compareAndReturn = function* (data) {
      const { externalFile, localFile } = data;
      const uf = JSON.parse(externalFile.toString("utf8"));
      if (!localFile) {
      }
    };
    const getFilesToCreateOrUpdate = (chunk) => {};

    const notifyNewVersion = (chunk) => {
      // chunk example => { uf: 'sp', nm: 'br-c0001-e000545-001-f.sig', dh: '10/10/2022 14:10:12' }
      const { uf: ufFile, nm: file } = JSON.parse(chunk.toString("utf8"));
      const subject = new VoteSubject();
      const vote = new Vote(subject);
      if (ufFile === "br") {
        vote.newGlobalFileVersion(ufFile, file);
      }
    };

    pollerStream.push(JSON.stringify({ externalURL, localPath }));

    pollerStream
      // Get external data
      .pipe(getExternalFile)
      // Create file
      //   .pipe(createReadStream(localPath))
      .on(
        "data",
        (data) => 1 ?? console.log(`chunk: `, JSON.parse(data.toString("utf8")))
      )
      .on("data", notifyNewVersion);
  }
}
const poller = new Poller();

poller.update({
  uf: "sp",
  file: "sp-e000545-i.json",
});

poller.update({
  uf: "br",
  file: "br-e000545-i.json",
});
