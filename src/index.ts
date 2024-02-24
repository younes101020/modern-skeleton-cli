#!/usr/bin/env node

import figlet from "figlet";
import { Command } from "commander";
import fs from "fs";
import { exec } from "child_process";

const program = new Command();

console.log(figlet.textSync("Youp CLI"));

program
  .version("1.0.0")
  .description("CLI for bootstraping fullstack modern web project")
  .option("-s, --start <name>", "Create project")
  .parse(process.argv);

const options = program.opts();

if (options.start) {
  const name =
    typeof options.start === "string" ? options.start : "fullstack_app";
  bootstrapNext(name);
}

async function bootstrapNext(name: string) {
  try {
    if (!fs.existsSync(name)) {
      fs.mkdirSync(name);
    }
    exec("npx create-next-app@latest", { cwd: name }, (error, _, stderr) => {
      if (error || stderr) {
        throw new Error("Can't create root folder");
      }
    });
  } catch (error) {
    console.error("Error occurred while bootstrap NextJS!", error);
  }
}
