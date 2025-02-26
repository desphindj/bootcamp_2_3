const fs = require('fs');
const path = require('path');

function getFileInfo(filePath) {
    if (!fs.existsSync(filePath)) {
        console.error("Error: File does not exist.");
        return;
    }

    const stats = fs.statSync(filePath);

    console.log(`File: ${path.resolve(filePath)}`);
    console.log(`Size: ${stats.size} bytes`);
    console.log(`Creation Date: ${new Date(stats.birthtime).toLocaleString()}`);
    console.log(`Last Modified Date: ${new Date(stats.mtime).toLocaleString()}`);
}

if (process.argv.length !== 3) {
    console.log("Usage: node file_info.js <file_path>");
} else {
    getFileInfo(process.argv[2]);
}