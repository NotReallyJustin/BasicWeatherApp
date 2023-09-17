const https = require('https');

module.exports = () => new Promise((resolve, reject) => {
    https.get('https://api.api-ninjas.com/v1/randomword', {
        headers: {
            'X-Api-Key': 'gAAAAABlBwvQKHRtyRs1Ph_z1I5s0U2w7gEi6KeLJLBu_Oz0swKnkOPkdk_2s66z9f_eEjo4uaGBgRpECj-lH6Sufg6grM_kOu_qpxHJ9MLnM7kcR1VwVsC3Mo223OqDayclBRAdkqsJ'
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

let randomThingy = 'gAAAAABlBwvPwVwFHclXb8OqtS04LqUrjQOapMd8YMuDl5OByvPHiixz1a80d2Sm__CUugCINO8HbOlpTsrOLhWaXXGGSejvbLbCWP4ArPzE3x5reaZp6cruHhCBLOXbfBmfxKuskTeo';