const fs = require('fs');
const path = require('path');

// 获取当前目录路径
const currentDir = process.cwd();

fs.readdir(currentDir, { withFileTypes: true }, (err, entries) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  entries.forEach(entry => {
    if (entry.isDirectory()) {
      const dirPath = path.join(currentDir, entry.name);
      const readmePath = path.join(dirPath, 'README.md');

      const content = `# ${entry.name}\n`;

      fs.writeFile(readmePath, content, err => {
        if (err) {
          console.error(`Error writing README.md in ${entry.name}:`, err);
        } else {
          console.log(`README.md updated successfully in ${entry.name}`);
        }
      });
    }
  });
});
