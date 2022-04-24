require("./create-repo")(
  "git init",
  "git branch -M main",
  "git commit --allow-empty -m 1",
  "git commit --allow-empty -m 2",
  "git checkout -b feat",
  "git commit --allow-empty -m 3",
  "git commit --allow-empty -m 4",
  "git checkout main",
  "git commit --allow-empty -m 5"
);
