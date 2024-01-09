const fs = require('fs');
const path = require('path');

const directoryToOrganize = 'B:\\Sigma Web Development Course\\Backend\\Express\\Day91-Ex15-Clear the Clutter\\Files';

function organizeDirectory(directoryPath) {
  try {
    const files = fs.readdirSync(directoryPath);

    for (const file of files) {
      const filePath = path.join(directoryPath, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        // Recursively organize subdirectories
        organizeDirectory(filePath);
      } else {
        // Move files to appropriate folders based on extension
        const extension = path.extname(file);
        const destinationFolder = path.join(directoryPath, extension.substring(1));

        if (!fs.existsSync(destinationFolder)) {
          fs.mkdirSync(destinationFolder);
        }

        fs.renameSync(filePath, path.join(destinationFolder, file));
      }
    }

    // Remove the original directory if it's now empty
    if (fs.readdirSync(directoryPath).length === 0) {
      fs.rmdirSync(directoryPath);
    }
  } catch (error) {
    console.error('Error organizing directory:', error);
  }
}

organizeDirectory(directoryToOrganize);
console.log('Directory organized successfully!');