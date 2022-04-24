require("./create-repo")(
  "git init",
  "git branch -M main",
  "git commit --allow-empty -m initial",
  "git checkout -b f1",
  "git commit --allow-empty -m 1",
  "git checkout -b f2 main",
  "git commit --allow-empty -m 2",
  "git checkout -b f3 main",
  "git commit --allow-empty -m 3",
  "git checkout -b f4 main",
  "git commit --allow-empty -m 4",
  "git checkout main",
  "git commit --allow-empty -m 5"
);
