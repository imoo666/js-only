import fs from "fs";

// 读取压缩后的 HTML 文件
fs.readFile("./dist/output.html", "utf8", (err, data) => {
  if (err) throw err;

  // 将 HTML 转换为 C 字符串格式
  const cString = `String htmlString = "${data
    .replace(/\\/g, "\\\\") // 转义反斜杠
    .replace(/"/g, '\\"') // 转义双引号
    .replace(/'/g, "\\'") // 转义单引号
    .replace(/\n/g, "\\n")}";\n`;

  // 将结果写入 C 文件
  fs.writeFileSync("./dist/output.c", cString);
});
