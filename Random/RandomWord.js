const https = require('https');

module.exports = () => new Promise((resolve, reject) => {
    https.get('https://api.api-ninjas.com/v1/randomword', {
        headers: {
            //idk if this API key works because the temp email kinda expired
            'X-Api-Key': 'gAAAAABlBxLJWiJScPfswc4BOBYw8BqDu7RJ_vniT-SwTZtRLALbgWYh3KaXB5VNsraYhL2qebx0jERxeQYrvbmn-Sb-YK8dyTzKtiY1H-Xm9PxzsZzzgLA='
        },
    }, (res) => {
        var chunk = "";

        res.on("data", (data) => {
            chunk += data;
        });
        
        res.on("end", () => {
            resolve(JSON.parse(chunk));
        });
    });
});

let randomThingy = 'gAAAAABlBxLJjNm262wP9CuazIoCpnl-gMsVOUNVMUYL7lJGWTBysmHNQqTEuR3v1JGVyBUHr9xadSd9itRQ_dBKQFSzpysBd6xaxKFrKLcdVCxDMqcI5Pgr3PlqG7JhlJnyjX46HmjQ';