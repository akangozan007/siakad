// file: list-paths.js
const fs = require("fs");
const path = require("path");

function listFiles(dir, base = dir) {
  let files = [];
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      files = files.concat(listFiles(fullPath, base));
    } else {
      files.push(path.relative(base, fullPath));
    }
  }
  return files;
}

const result = listFiles(".");
fs.writeFileSync("all-paths.txt", result.join("\n"));
console.log("Semua path disimpan di all-paths.txt");
