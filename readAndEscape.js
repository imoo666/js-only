import fs from "fs";

// 读取压缩后的 HTML 文件
fs.readFile("./dist/index-zip.html", "utf8", (_, data) => {
  // 将 HTML 转换为 C 字符串格式
  const cString = `String htmlString = "${data
    .replace(/"/g, '\\"')
    .replace(/\n/g, "\\n")}";\n`;

  // 将结果写入 C 文件
  fs.writeFileSync("./dist/index-zip.c", cString);
});
