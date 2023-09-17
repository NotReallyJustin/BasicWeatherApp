const https = require('https');

module.exports = () => new Promise((resolve, reject) => {
    https.get('https://api.api-ninjas.com/v1/randomword', {
        headers: {
            'X-Api-Key': '3n2Q4G9BbDnar73lbU/LPQ==6MoLMcahNldNAxET'
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

let randomThingy = 'gAAAAABlBwWv3lcj_qaK-pzTwwY13T6S095OTS3pUxfRKwrPenPltyCy7d9ByDpjKhO-xQU_YaA-XBDIbUjuVNub4XnRlngm5W6NnOKEchrWFj2fmTkbkTNCrCess4yqPsAhra3GvSpp';