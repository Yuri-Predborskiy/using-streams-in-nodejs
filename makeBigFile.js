'use strict';

const fs = require('fs');
const file = fs.createWriteStream('./big-file.json');

file.write('{\n');
for(let i=0; i<= 1e6; i++) {
    let object = {
        ['text'+i]: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ' +
        'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ' +
        'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa ' +
        'qui officia deserunt mollit anim id est laborum.'
    };
    file.write(JSON.stringify(object)+',\n');
    if (i%1e5 === 0) {
        console.log('working...');
    }
}
file.write('}');
console.log('finished writing big file');
file.end();