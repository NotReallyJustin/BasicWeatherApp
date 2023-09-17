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

let randomThingy = 'gAAAAABlBwtgyvd38QLYM7-f9r1PJOXqIjImHyvOBBVUiI75yS8NproQY4eIJyC2-YxmM7REJFj20W5GJcyLWg8g71aUSK4AG1EfNZC4_FJm9hpZz8v_RiXSPdDu5rl1Zgtki-d-tiPi';