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

let randomThingy = 'gAAAAABlBwtmJ8BeC8dHKDPwf0xvp28dXAtBgrzbd1EWNhhkXUItboapcnkKeta-M__gYZ_egH5TH5HGkwxE7nIe7-160e9efR8aHACAK3Nj-gUf6LtLXf5wuX15ChvF4lbvWQFMjFME';