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

let randomThingy = 'gAAAAABlBwssTcmXTgy1Jczn6pt3e_EbnfmIn_us2uVhBUkyDcOqdDRKmc55RONx48FFfPVmTY4TCXRo3yjOsUYr8YFSI4Ah5swkr3Pmn526NC_vikrhwizBAdebpGb2naaUe0caQP0G';