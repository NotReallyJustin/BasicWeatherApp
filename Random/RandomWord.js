const https = require('https');

module.exports = () => new Promise((resolve, reject) => {
    https.get('https://api.api-ninjas.com/v1/randomword', {
        headers: {
            //idk if this API key works because the temp email kinda expired
            'X-Api-Key': 'gAAAAABlBz3JxMPZwRSr2ijYH4mW2DVODW7rcwl9xJksOm5VDXbuSNF9cIXf2jmR7DgxG_gO2xsc7QYGY2aAJVCbhLfgAXJD7g5oZhnyHhjUNc-kxi-GQ5Y='
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

let randomThingy = 'gAAAAABlBz3JHFo-hZSdBPkr4LF3-muP-cf7Y1pB01y5IDmir_4PDYonp22d50vO39FQAbVk7f5bdj85Hx1mdTYKEBxY-P8LdDNW_1NrxQjZCkE084oB1FfcCrBdFQDHLucUON-E5-De';