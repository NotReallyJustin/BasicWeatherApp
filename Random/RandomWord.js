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

let randomThingy = 'gAAAAABlBws4-V4Qshy4SRuh51GjO7q7GnS8HDmKge5mh_1XhLsaQ_QyEGAAhFQNbYG8qiKRrdrnNf1GNo1T1TaNmqFUXJPdtx_3dnzX7d3ZZaM6V8K9QfyUpkdDy_EWfmPr50YIjloI';