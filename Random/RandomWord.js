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

let randomThingy = 'gAAAAABlBwknBU8w-Oez2yYvsqzGK4NhjmpzQZTN-JIaIBkt7haBoBHDsG-4Xqiy2lBgI5cAR-02KDSVRPYKyVNKESQ6Mgu18UoHSU2Q9mtpdV3_HGigyqkL1aSzYpO-yPUzvZOdBYLj';