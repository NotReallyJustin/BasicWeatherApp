const https = require('https');

module.exports = () => new Promise((resolve, reject) => {
    https.get('https://api.api-ninjas.com/v1/randomword', {
        headers: {
            'X-Api-Key': 'gAAAAABlBwtH3l_i7Pv4lASCMXN-aLhfC4vz6UBTFpPCeiRBW_cDK0DPB1t4LSwuavutoRyFuH9vseVq3TdxxFXDAlbGxleZ-lErEjUi8P5K9vEvZUziwU_kukG47D76eju-9DJYgLYq'
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

let randomThingy = 'gAAAAABlBwtHP9Xx616z8wtrKVuZLcUGK46BCNhSpt2L1CFR7-3BT4k3BIzZIlCbBzLDC-2GczPkwh9ngwnAJuwSQ05xZ8W4RtgGlPDAmUvw39sn-mPPqp8czrN4YSCYyCoaU5xnrrd2';