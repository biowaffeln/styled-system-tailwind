import chalk from "chalk";
import ncp from "ncp";
import mkdirp from "mkdirp";
import path from "path";
import { promisify } from "util";

const copy = promisify(ncp);
const create = promisify(mkdirp);

export async function cli(args) {
  const targetDir = `${args[2] || "src"}/system`;
  const templateDir = path.resolve(__dirname, "../templates");

  console.log("copying project files...");
  try {
    await create(targetDir);
    await copy(templateDir, targetDir, { clobber: false });
    console.log(chalk.green.bold("DONE"), "successfully generated!");
  } catch (err) {
    console.log(chalk.red.bold("ERROR"), err);
  }
}
