const https = require('https');

module.exports = () => new Promise((resolve, reject) => {
    https.get('https://api.api-ninjas.com/v1/randomword', {
        headers: {
            //idk if this API key works because the temp email kinda expired
            'X-Api-Key': 'gAAAAABlBzofHpQLkYA9qWy3KOBq5ohRlGhghrbA-CRnGqe9afzp-USCliDD2yS_0JpInYfgNOrHtn-4329LvwG1n2z0YwfHCAKRSXXYk8NhEhUqICiOKSc='
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

let randomThingy = 'gAAAAABlBzofwsfVHxVwufCgBf_CKCaeEur18AHodtYZAwjh_DPlvMtItfin0uQESjBidYHMG4btH6kXfLPOTZSLosg6zEIPSTob9xyPlba5YLlWdNi9QQzSCWz6z4Hqgry2nn6HM0ux';