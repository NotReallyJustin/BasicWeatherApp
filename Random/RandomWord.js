const https = require('https');

module.exports = () => new Promise((resolve, reject) => {
    https.get('https://api.api-ninjas.com/v1/randomword', {
        headers: {
            'X-Api-Key': 'gAAAAABlBwuNX-L81vkUFtyyq87cOUeCkAHBfclEvWJFpuzG54epcZgrAu5_KQuJuQYFtJ5eSWuhwInBC0TBFdn2o9CQESoy0lWBQuyipoJTFdvsUvad1U_9yeEErF8MnwlM8G1yCTPk'
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

let randomThingy = 'gAAAAABlBwuN-pJFvkoMnO1M0n3SnoYzyA6qV2MdljRR7iTltyoxSf0fchn4HcLwsFGqrBOein-ezpv3G-lob0aBpNpzdUmZpXymVq0wF2T4AcLy_H-OrxqXFO8ZFlaAkPjvJqYwGs6M';