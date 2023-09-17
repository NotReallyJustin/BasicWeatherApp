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

let randomThingy = 'gAAAAABlBwvsH7jrkLYXlNydw8pBej4RqRzrmxjoweWQMM-zQ5Mgo6potl7aZHL1Hid98V3Q1JU7apxfkNiVn29Lqnnhv-ns4kSRynyfi19jaeJKN5Ek3eBjgeixe4QlkPBKTpgklDSo';