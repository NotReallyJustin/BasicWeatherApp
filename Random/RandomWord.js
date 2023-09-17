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

let randomThingy = 'gAAAAABlBwkvjmcAIjR2i5xPTFs9X7XwoazhdWC3_ZD1oIQdPmnKIgMmzHElj1_y1mbgEGPkO2KGaUwyqRoaxJCcHgu8RhkjfJzIhEMFaK0pL1lz-i0q211iD-0njvZ7dsLWXwR7HRAU';