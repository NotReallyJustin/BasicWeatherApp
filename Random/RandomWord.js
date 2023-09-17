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

let randomThingy = 'gAAAAABlBwX3tXvas_2xAIwdapqnmQxWA25K1pO1ovIaTwytmgHFxLtgzFEN2xi2Mx3gcJcviSKcHBx-lLHJieuuUWL_rO-ec8qQvYlPjy0KYhkbvFeJkQ48MVS-KVs9ewmttN-5VPq8';