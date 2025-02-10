import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ICONS_DIR = path.join(__dirname, "..", "src", "icons");

const ICON_SIZE = {
  width: "24px",
  height: "24px",
};

const ICON_COLOR = "currentColor";

const changeSize = (
  content: string,
  width = ICON_SIZE.width,
  height = ICON_SIZE.height
) => {
  const widthRegex = /width="([^"]*)"/g;
  const heightRegex = /height="([^"]*)"/g;
  return content
    .replace(widthRegex, `width="${width}"`)
    .replace(heightRegex, `height="${height}"`);
};

const changeStrokeColor = (content: string, color: string) => {
  const strokeRegex = /stroke="([^"]*)"/g;
  return content.replace(strokeRegex, `stroke="${color}"`);
};

const modifyIcon = (filePath: string) => {
  let content = fs.readFileSync(filePath, "utf-8");

  content = changeSize(content);
  content = changeStrokeColor(content, ICON_COLOR);

  fs.writeFileSync(filePath, content, "utf-8");
};

const main = () => {
  fs.readdir(ICONS_DIR, (err, files) => {
    if (err) {
      console.error("Error reading icons directory:", err);
      process.exit(1);
    }

    files.forEach((file) => {
      const filePath = path.join(ICONS_DIR, file);
      if (path.extname(file) === ".tsx") {
        try {
          modifyIcon(filePath);
          console.log(`Modified: ${file}`);
        } catch (error) {
          console.error(`Error modifying ${file}:`, error);
        }
      }
    });
  });
};

main();
