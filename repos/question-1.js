require("./create-repo")(
  "git init",
  "git branch -M main",
  "git commit --allow-empty -m 1",
  "git commit --allow-empty -m 2",
  "git checkout -b f1",
  "git commit --allow-empty -m 3",
  "git commit --allow-empty -m 4",
  "git checkout main",
  "git commit --allow-empty -m 5",
  "git checkout -b f2",
  "git commit --allow-empty -m 6",
  "git commit --allow-empty -m 7",
  "git checkout main",
  "git merge f1 -m 8",
  "git merge f2 -m 9",
  "git checkout -b f3",
  "git commit --allow-empty -m 10"
);
