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

let randomThingy = 'gAAAAABlBwL0vXfcFjes33jpOCyQo4SaxI28DX2NDe8XAmbuE_XaF0YXCFzifVGGm0Jd_3Gn-Hc8ZxKRDkNMEVlozBkq50ni9kC6gdFBcDdG2RoL89BZbhBFNjxzf1WNOoacyMfcXIgi';