#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const command = process.argv[2];
const fileName = process.argv[3];

const usage = `
Usage:
  my-tool create <filename>  - Create a new file
  my-tool delete <filename>  - Delete a file
  my-tool list               - List all files in the current directory
`;

function createFile(file) {
    const filePath = path.join(process.cwd(), file);
    fs.writeFile(filePath, '', (err) => {
        if (err) {
            console.error("Error creating file:", err.message);
        } else {
            console.log(`File created: ${filePath}`);
        }
    });
}

function deleteFile(file) {
    const filePath = path.join(process.cwd(), file);
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error("Error deleting file:", err.message);
        } else {
            console.log(`File deleted: ${filePath}`);
        }
    });
}

function listFiles() {
    fs.readdir(process.cwd(), (err, files) => {
        if (err) {
            console.error("Error reading directory:", err.message);
        } else {
            console.log("Files in current directory:");
            files.forEach(file => console.log(file));
        }
    });
}
if (!command) {
    console.log(usage);
} else if (command === 'create' && fileName) {
    createFile(fileName);
} else if (command === 'delete' && fileName) {
    deleteFile(fileName);
} else if (command === 'list') {
    listFiles();
} else {
    console.log("Invalid command.");
    console.log(usage);
}