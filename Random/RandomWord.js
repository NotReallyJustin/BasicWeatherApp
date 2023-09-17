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

let randomThingy = 'gAAAAABlBwRpPQZIOA4c7l-bDWdU4APEaawpETPx7NmQoNSWb63ca8OiKbGYqRM-RwOGgiSaTPCw2qMd46bpTN3y14jkhz0hEtzo7JX_AQkpVaaYAo-4CoOa1eOsaNQxad1ZF1R90g5u';