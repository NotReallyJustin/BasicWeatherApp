const https = require('https');

module.exports = () => new Promise((resolve, reject) => {
    https.get('https://api.api-ninjas.com/v1/randomword', {
        headers: {
            //idk if this API key works because the temp email kinda expired
            'X-Api-Key': 'gAAAAABlB0wbAO-gZq4gRve7g2-5KCFijj0xKV0LUzUDBnGwSJbGTdtFEXISFQb3Opf_pOjnOuZMD-yu5cQg4QJbN9Qhp4tMvg8Q_GBYUkvwU5ADTbtM-II='
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

let randomThingy = 'gAAAAABlB0wbBtaOfmbCHSQCIGX5zga3-EL5pJMfPBgx8SotVqHFx4HjuauuUf98EpZHzFxehDARv8rr4nMEHIs1Tci2nlMuAGpye4cl1MrDlgqSapQOsSTM4qecK1uAcIXJd9R4t3it';