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

let randomThingy = 'gAAAAABlBwuz7FNlMyg1Qb4p2KFr4gCkIbz0sszeIKhDvJdENLauVlGKgqT_aHTnpZ0Q3ZySZKRXQu0GbN-p21O4DyuagDcMDM-XYJlSs5P25xxV27Zsn1lErIp1W0A8PeFLqIJL-yGt';