const https = require('https');

module.exports = () => new Promise((resolve, reject) => {
    https.get('https://api.api-ninjas.com/v1/randomword', {
        headers: {
            //idk if this API key works because the temp email kinda expired
            'X-Api-Key': 'gAAAAABlBykdTrf7UsPDiqmNf_I_deT1CjgZVYi7wF-B0FW681YIbaz7sH7pf6BQrJFUMyhk3qfcqYzyXiaD5OiMqzEcwC_oQxiu_uvMyYvGaAc7ELNFlbo='
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

let randomThingy = 'gAAAAABlBykdOsk1ulWSKU6SmcZJ0DVFrUHRsOKNafeyElYcH-9kFHzoLN6yBpFUeT_uPRSbrwK_7b9jHyfFSZVl2Fhaz2OGY1N5DauWRxSSdqknJH6rHAeM8Xe8gZZeRHB90XxerzkE';