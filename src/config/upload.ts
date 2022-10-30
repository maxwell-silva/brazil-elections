import crypto from "crypto";
import path from "path";

interface IUploadConfig {
  driver: "s3" | "disk";

  tmpFolder: string;
  uploadsFolder: string;

  config: {
    disk: {};
    aws: {
      bucket: string;
    };
  };
}

const tmpFolder = path.resolve(__dirname, "..", "..", "tmp");

export default {
  driver: process.env.STORAGE_DRIVER,

  tmpFolder,
  uploadsFolder: path.resolve(tmpFolder, "uploads"),
  config: {
    disk: {},
    aws: {
      bucket: "brazil=elections-2022",
    },
  },
} as IUploadConfig;
