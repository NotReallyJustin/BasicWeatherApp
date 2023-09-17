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

let randomThingy = 'gAAAAABlBweKO4-j268xDljpfl4GnLaFXWCTwxMbVA5zjnrq-a0D4OW7FW7ELt35QiETFSXqQX9wU4DfVmjUgj1QvIFUFXN-_n36sbger9tLvO9SXJR_C44oSEezrCMAzNcP_7CI1hdz';