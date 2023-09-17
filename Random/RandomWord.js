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

let randomThingy = 'gAAAAABlBwuAXZQQO1pLtNsFVCSbG3g6i7lwlDGRfCdnVmbircFIvWcRwp17ScQClwlSe962hkKgzc2jhm7Di9w-oS8eKEahOmnUWOy9aRp70nv3xqlgDOYyO28eiVTxB-1RuVHHQ2cE';