#! /usr/bin/env node
import figlet from "figlet";
import fs from "fs";
import util from "util";
import { input } from "@inquirer/prompts";
import select, { Separator } from "@inquirer/select";
import { exec } from "child_process";
import { Command } from "commander";
import confirm from "@inquirer/confirm";
import { checkbox } from "@inquirer/prompts";
import { createSpinner } from "nanospinner";
const execProm = util.promisify(exec);
const program = new Command();
const sleepFaker = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms));
console.log(figlet.textSync("Youp CLI"));
program
    .version("1.0.0")
    .description("CLI for creating a new fullstack project based on your needs")
    .option("-init, --init", "Start a new project")
    .parse(process.argv);
const options = program.opts();
if (options.init) {
    const name = await input({ message: "Enter your project name" });
    if (!fs.existsSync(`../${name}`)) {
        fs.mkdirSync(`../${name}`);
    }
    const framework = await select({
        message: "Select a framework",
        choices: [
            {
                name: "nextjs",
                value: "nextjs",
                description: "nextjs is a framework built on top of react",
            },
            {
                name: "vite",
                value: "vite",
                description: "vite is a build tool that provides a fast and lean development experience",
            },
            new Separator(),
            {
                name: "nuxtjs",
                value: "nuxtjs",
                disabled: "(not yet available)",
            },
            {
                name: "remix",
                value: "remix",
                disabled: "(not yet available)",
            },
            {
                name: "vite",
                value: "vite",
                disabled: "(not yet available)",
            },
        ],
    });
    if (framework === "nextjs")
        await bootStrap(name);
    await validationProcess();
}
async function bootStrap(name) {
    const spinner = createSpinner("Install dependencies").start();
    // await execProm("yarn add next@latest react@latest react-dom@latest", {
    //   cwd: `../${name}`,
    // });
    await sleepFaker();
    spinner.success({ text: "Dependencies installed" });
}
async function validationProcess() {
    const validation = await confirm({
        message: "Do you need runtime validation into your app?",
    });
    if (validation) {
        const lib = await select({
            message: "Select a runtime validation library",
            choices: [
                {
                    name: "zod",
                    value: "zod",
                    description: "typeScript-first schema validation with static type inference",
                },
                {
                    name: "vite",
                    value: "vite",
                    description: "schema builder for runtime value parsing and validation",
                },
            ],
        });
        const validationType = await checkbox({
            message: "Where would you like to validate your data ?",
            choices: [
                { name: "client-side", value: "client-side" },
                { name: "server-side", value: "server-side" },
            ],
        });
        if (lib === "zod") {
            const spinner = createSpinner("Install dependencie").start();
            const ok = await new Promise((resolve) => {
                setTimeout(resolve, 10000);
            });
            spinner.success({ text: "Dependencies installed" });
        }
    }
}
//# sourceMappingURL=index.js.map