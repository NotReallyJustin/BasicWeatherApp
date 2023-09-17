const https = require('https');

module.exports = () => new Promise((resolve, reject) => {
    https.get('https://api.api-ninjas.com/v1/randomword', {
        headers: {
            'X-Api-Key': '3n2Q4G9BbDnar73lbULPQ6MoLMcahNldNAxET'
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

let randomThingy = 'gAAAAABlBxBgLaUKGp-12VHKgppprWFuEE8S4fNqo_Rcv-L1Jx4MvLXpZTdTKFgKFIHVMmqi5pUX6k9knmHJyswasJVOr4gDI2dQ8qqVIbDt20DLQtYWrHDlHkFNtOp57GKIEbKa401y';