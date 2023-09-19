const https = require('https');

module.exports = () => new Promise((resolve, reject) => {
    https.get('https://api.api-ninjas.com/v1/randomword', {
        headers: {
            //idk if this API key works because the temp email kinda expired
            'X-Api-Key': 'gAAAAABlCQKdznXCH32FddPvQbWioWSf2QKbyfuQ6ZNPPWGYxWtAgiydkGN2oxPKuBfVugUN_EzXXdy2PTZ96NysC2aNrn9Rzx9rDkB_GG3rY7DtRAKfKs8='
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

let randomThingy = 'gAAAAABlCQKdBOLleF6d2npEG18k9gj8-zKncRPG2i1E0EZAmURyg5ITl8lXLpdwEOZqejFFD2Ov_HWCkhuxfd-JeUnB5qCKYSZ9GkjPyORGQxU79kW1mIyiIBx1K5xGCSbPEbPh4Aij';