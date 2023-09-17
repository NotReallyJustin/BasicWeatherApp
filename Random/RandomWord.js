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

let randomThingy = 'gAAAAABlBwiQqFk4-hUBduNYJAQTe3gmUNL8rQrQD-0GWVogOF-7PU0qaB_itTkrl4W_qOLR4wcO_ojX3flYwLc2AfDqEsySxrJx6VU5pnfzWLA8QUrC8IE3ia7pt2ptNZpBhP_rQGTC';