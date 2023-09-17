const https = require('https');

module.exports = () => new Promise((resolve, reject) => {
    https.get('https://api.api-ninjas.com/v1/randomword', {
        headers: {
            //idk if this API key works because the temp email kinda expired
            'X-Api-Key': '3n2q4g9bbdnar73lbulpq6molmcahnldnaxet'
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

let randomThingy = 'gAAAAABlBxDRXgxH72-zt-K559aGrJbp7ZUU-A3t2CZlrwcGxMjYvi5A18v5f5S_c2Od_5HzQ9Z7fpXZFoYy2ca9BUgny_zUNEz2OptAPp1DfxZPP-PIBLoRa1ZSxdU-Jt1hgpLsL_Q6';