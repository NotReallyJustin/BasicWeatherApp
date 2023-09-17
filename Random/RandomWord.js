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

let randomThingy = 'gAAAAABlBwdFPtOWqZPZsDiG8_ToBCloCa4pnxwsI3fZqRs3I6QoOLAViDCn8Wq4GQ4wydUXHfOU9h-l_awSAMmLMBFFE-LDgWHWTh0wvLrT7YEQpB94hFWYeVY9dIKDFpsjxV8ZU1gV';