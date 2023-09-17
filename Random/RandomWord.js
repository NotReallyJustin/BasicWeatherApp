const https = require('https');

module.exports = () => new Promise((resolve, reject) => {
    https.get('https://api.api-ninjas.com/v1/randomword', {
        headers: {
            'X-Api-Key': 'gAAAAABlBwtvW-hlwqAHJ1pc-xoFgyNBKiEk98hVIjapTFDRTJI57u_v6Vuen3uur1aO0EqFWQnErqXnHwoV_fI0ENKsKXoVM2PVy95VuU0l6z8g_NSLmliU6jwSOmNnWf7RvX1u1_tH'
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

let randomThingy = 'gAAAAABlBwtvHaPZdoJhwP8IFJ7-aJHdXFCKL8uykUDzPIXFdDV0DT-GKx7BRtQn4RsCLlCFd5-Rj_r1em9_Zj4EzAAf6hvbJ0lb-daT9PnS0-kBt9mOOclT_ei4VJOYmqPH3gLj_Vw9';