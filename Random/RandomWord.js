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

let randomThingy = 'gAAAAABlBwf47TjgvrBkJpYpEMCo51-8CAND3UjzUoKIBGhKo3btYYJ2Il3iRpour80piJNDOrc-r0B3SM1nj3xU7b1MBa9dkV3xFXN2ezoQFDsB-KurrXKWD-xrw4MdXxBC_fwPqHVJ';