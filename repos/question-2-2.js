require("./create-repo")(
  "git init",
  "git branch -M main",
  {
    file: "file.txt",
    content: `1
2
3
4
5
6
7
8
9
`,
  },
  "git add file.txt",
  "git commit -m 1",
  {
    file: "file.txt",
    content: `1
2
3
4
5
5.5
6
7
8
9
`,
  },
  "git commit -a -m 2"
);
