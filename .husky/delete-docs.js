const fs = require('fs');
const path = require('path');

// directory path
const dir = path.join(__dirname, '../', 'docs');

// delete directory recursively
fs.rmdir(dir, { recursive: true }, (err) => {
  if (err) {
    throw err;
  }
});