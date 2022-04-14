const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const fileName = process.argv[3];

const webFetcher = (url, fileName) => {
  request(url, (error, _, body) => {
    if (error) {
      console.log(`Whoops! File couldn't be created`);
      return;
    }
    fs.writeFile(fileName, body, error => {
      if (!error) {
        console.log(`Downloaded and saved ${body.length} bytes to ${fileName}`);
        return;
      }
      console.log("Error:", error);
    });
  });
};

webFetcher(url, fileName);

