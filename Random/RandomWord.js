const https = require('https');

module.exports = () => new Promise((resolve, reject) => {
    https.get('https://api.api-ninjas.com/v1/randomword', {
        headers: {
            'X-Api-Key': 'gAAAAABlBwt1Rg6KN5wWLbeO8Z4n9y_wrMCLCyTG-HAN5gl5mGbrF8cCkaqSswPxGXHLOFaYKxcqJm-JhDitf1JGcEcatOcYYiY2bNZDKXUiFp-eopvM9xCty9JL_YuUKScKWKQyxQDw'
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

let randomThingy = 'gAAAAABlBwt1qnOUZDGqvJgtASF6GLm-ovJAej_DC6Lhsu178bFMqkSN5jJqbdsy_tUjNqC23KjMWKcPTczp31mazn1_rKi5X3xDcdSzsy2sQCdoYeiut8W4uMb8OtBCyCM_30NvZ3s0';