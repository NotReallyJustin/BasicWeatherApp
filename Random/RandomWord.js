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

let randomThingy = 'gAAAAABlBwu_xcgYm7sVcVYzA7BaswxBhwcT5BTr99VKIZaPH86rlCOgwdqKzbKc7LqQUKsBNwUpt_3fdlBzVc_dDW56EeJHB7y0h9-hXbs1SykGG3QClNlfIYjM--DZZjVYYcjTyY9B';