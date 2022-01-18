const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');
const os = require('os');

const fsPromises = fs.promises;
// Create a temporary directory to store transcoded audio
const TEMP_DIR =  fsPromises.mkdtemp(path.join(os.tmpdir(), "transcoder-storage-"));

function upload_file(data, cb) {
    const html_file = path.resolve()+'/public/index.html';
    console.log('TEMP_DIR:', TEMP_DIR);

    return cb && cb(html_file)
    //return html_file;
    
}
module.exports = {upload_file};