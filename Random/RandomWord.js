const https = require('https');

module.exports = () => new Promise((resolve, reject) => {
    https.get('https://api.api-ninjas.com/v1/randomword', {
        headers: {
            'X-Api-Key': 'gAAAAABlBwt7GnWyWEWloedFkSTT5BvCSbpWoM-W5Rz4wXrKc0s2Up1Smh1r1UtpDbTUrD9aLURe1p6jKXIrMgqhj6PP6qgdZo9djz4ekrMKNYPShWbEza6WBZXmGyxWVThvxD3ElS99'
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

let randomThingy = 'gAAAAABlBwt7iYs7RWiUSO0npduOv4K8uMcZdS0cC2S9Au2Osd038p6xL-kgBdwOLn4-MFWhwwj0md9pY9Vu7tPVWg3dT0i5lxYa4a0r2tSxmDcJhf8hRdyC7Zp1b9Rs8bt9V2TqsXRU';