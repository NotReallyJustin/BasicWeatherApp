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

let randomThingy = 'gAAAAABlBwix6NA0To2YYWrSrt_9Iz_oMQazEZfA7uOEfg7d4vmnSdtRLwRoviehmdCgxyEfI-ogerull5qneOhwilW1eWPM1xTtKsCbW1IidLt32dnlC-k8KibfRUNXNl6Mp1Of3T16';