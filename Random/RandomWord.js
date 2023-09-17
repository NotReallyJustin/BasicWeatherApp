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

let randomThingy = 'gAAAAABlBwg_Axgn_tGLNT0l1Ked4uc8T6LnIvkGVyBTcEI7Gs8n230a_VsMZO1WK6C4nRWIUGaBeFR7S_12YKLzUhdnEn6YlKHJQPXV0pXVATkbdFP4TgNwu15x7djaBf9IUl3o2rD8';