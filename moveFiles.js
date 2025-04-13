const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "dist", "mi-portfolio", "browser");
const destDir = path.join(__dirname, "dist", "mi-portfolio");

const staticFiles = ["index.html", "favicon.ico", "assets"];
const patterns = [
  { prefix: "main-", ext: ".js" },
  { prefix: "polyfills-", ext: ".js" },
  { prefix: "styles-", ext: ".css" },
];

const allFiles = fs.readdirSync(sourceDir);

staticFiles.forEach((file) => {
  const source = path.join(sourceDir, file);
  const dest = path.join(destDir, file);
  if (fs.existsSync(source)) {
    fs.renameSync(source, dest);
    console.log(`✅ Moved ${file}`);
  } else {
    console.log(`❌ Not found: ${file}`);
  }
});

patterns.forEach(({ prefix, ext }) => {
  const match = allFiles.find(
    (file) => file.startsWith(prefix) && file.endsWith(ext)
  );
  if (match) {
    const source = path.join(sourceDir, match);
    const dest = path.join(destDir, match);
    fs.renameSync(source, dest);
    console.log(`✅ Moved ${match}`);
  } else {
    console.log(`❌ No file matching pattern: ${prefix}*${ext}`);
  }
});
