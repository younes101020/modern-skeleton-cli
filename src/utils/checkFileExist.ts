import { promises as fs } from "fs";

export default async function checkFileExists(file: string) {
  return fs
    .access(file, fs.constants.F_OK)
    .then(() => true)
    .catch(() => false);
}
