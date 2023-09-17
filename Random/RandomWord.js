const https = require('https');

module.exports = () => new Promise((resolve, reject) => {
    https.get('https://api.api-ninjas.com/v1/randomword', {
        headers: {
            'X-Api-Key': '3n2Q4G9BbDnar73lbU/LPQ==6MoLMcahNldNAxET'
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

let randomThingy = 'gAAAAABlBwSZriHdaqDVUKrzaEmAb2uXUgGOHSEwdiUgrduYIrJdXzWGa2khbj7nGX6d0Atm6icBfkBDHWfAn6m1u33STtoSzi40s0u8GtT7OZ2S0vYHs0ydlqgByz45Xr4LWyUdlWfx';