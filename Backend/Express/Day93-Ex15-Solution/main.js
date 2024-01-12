import fs from 'fs/promises';
import fsn from 'fs';
import path from 'path';

let basepath = 'B:\\Sigma Web Development Course\\Backend\\Express\\Day93-Ex15-Solution\\';
let files = await fs.readdir(basepath);

for (const item  of files) {
    let ext = item.split('.')[item.split('.').length-1];
    if(ext != 'js' && ext != 'json' && item.split('.').length > 1){

        if(fsn.existsSync(path.join(basepath, ext))){
            //move the file to corresponding directory
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item));
        }else {
            fs.mkdir(path + ext);
        }
    }
}