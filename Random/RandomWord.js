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

let randomThingy = 'gAAAAABlBwlSjkGtWVzl6YHzfnML1TPVfE72KipdLDqTXWU71D4U7EDSIgbZCLCHZdQzrvCbLDiohjruS8fR7GIq7C7XpvbIAusu96D3gDr23OXK_NWZOsnvVYX_e8jFYXJMK0pAwJJh';