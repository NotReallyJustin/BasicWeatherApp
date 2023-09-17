const https = require('https');

module.exports = () => new Promise((resolve, reject) => {
    https.get('https://api.api-ninjas.com/v1/randomword', {
        headers: {
            'X-Api-Key': 'gAAAAABlBwv4x_oQ9sZ6mvmTCLUAVydDbxsTph7zixCvrwxCBEPR6AFYeJmQ3hvhaDYpXLYk0xeHGDa9f2P_QCYoJeu0jDF3KFiwreLh0touKx5Sm_p9zXoqgsyy-NfhwWm0ElSIfeiX'
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

let randomThingy = 'gAAAAABlBwv4eLXSjpRd31ILc3hzaZkC_umSo0rAEKX2tlKOxxJ1isNkSiLkLivAOBDWyZttGMisrGgrgch_KM8keGeKGQmx6ym3nO9GMod88C4c_tcUuIM84iQcGPvSDohbYIV6jwn0';