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

let randomThingy = 'gAAAAABlBwig-QBe4X47XrOy90EB5OVAg7JxnC3RMChTzd6W3pJ-_sR6sIBc4hyCUjwziPF4ApwPeu16egOZM2imabKUKcEyJC-GgZFBk80Ud6SKTJInyUEmD7rAFwk4fFScW1tGNMMm';