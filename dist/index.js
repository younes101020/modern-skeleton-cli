#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const figlet_1 = __importDefault(require("figlet"));
const commander_1 = require("commander");
const fs_1 = __importDefault(require("fs"));
const child_process_1 = require("child_process");
const util_1 = __importDefault(require("util"));
const execProm = util_1.default.promisify(child_process_1.exec);
const program = new commander_1.Command();
console.log(figlet_1.default.textSync("Youp CLI"));
program
    .version("1.0.0")
    .description("CLI for bootstraping fullstack modern web project")
    .option("-s, --start <project_name>", "create new fullstack project")
    .parse(process.argv);
const options = program.opts();
if (options.start) {
    const name = typeof options.start === "string"
        ? `../${options.start}`
        : "../fullstack_app";
    bootstrapNext(name);
}
function bootstrapNext(name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!fs_1.default.existsSync(name)) {
                fs_1.default.mkdirSync(name);
            }
            const { stdout, stderr } = yield execProm("yarn add next@latest react@latest react-dom@latest", {
                cwd: name,
            });
            console.log("stdout:", stdout);
            console.log("stderr:", stderr);
        }
        catch (error) {
            console.error("Error occurred while bootstrap NextJS!", error);
        }
    });
}
//# sourceMappingURL=index.js.map