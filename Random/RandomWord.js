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

let randomThingy = 'gAAAAABlBwumykpEZEu9boORhZeq2hPs2foYS_xL19U8Ujoqjg2iid3lUxgyk8z8QDVgHPTqGG2UW2Pdh_HvBiaeL0E470RMfJgKDw-sAkzjZwiuCAXOjMsOVVCDwbxOtYSD-XojsgRs';