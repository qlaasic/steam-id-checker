const lineReader = require('line-reader');
const SteamApi = require("steamapi")
const fs = require('fs');

//https://steamcommunity.com/dev/apikey
const apiuser = new SteamApi("replaceme");

lineReader.eachLine('input.txt', function (line, last) {
    apiuser.resolve(line).then(id => {
        console.log(`${line} is taken`);
    }).catch(err => {
        console.log(`${line} is not taken`);
        fs.appendFile('output.txt', `${line}\n`, (err) => {
        
        });
    });
})