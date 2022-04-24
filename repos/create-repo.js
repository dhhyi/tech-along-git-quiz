const os = require("os");
const fs = require("fs");
const path = require("path");
const cp = require("child_process");

const sleep = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 500);
  });

const createTmpGitRepo = async (...commands) => {
  const tmpDir = fs.mkdtempSync(os.tmpdir() + path.sep + "git-tech-along-");

  for (const cmd of commands) {
    if (typeof cmd === "string") {
      cp.execSync(cmd, { cwd: tmpDir });
    } else {
      const { file, content } = cmd;
      fs.writeFileSync(path.join(tmpDir, file), content);
    }
    await sleep();
  }

  console.log("created repo in", tmpDir);

  cp.execSync("code-insiders " + tmpDir, { stdio: "inherit" });
};

module.exports = createTmpGitRepo;
