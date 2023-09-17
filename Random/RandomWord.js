const https = require('https');

module.exports = () => new Promise((resolve, reject) => {
    https.get('https://api.api-ninjas.com/v1/randomword', {
        headers: {
            //idk if this API key works because the temp email kinda expired
            'X-Api-Key': 'gAAAAABlBzfqoCwG-5OlS1liOCNTLdLB0YlTG2YCM6ARxLi4t7Esk5zvPAuzft-5pcJ-8yYQzP52tp78_6zKt_uNE9kdMRnXstJmiJmx0l_ox7oTGK9ziN8='
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

let randomThingy = 'gAAAAABlBzfqrnNogQFds0z5MaP886Msf0Df4oN2-7ksRM_vKXNr1DtbbtjZE-gcmfpga9lD1R4XeJQv1QFz0yjQkwuyrYjMb-pSf0QMeR9Cq2GmK5WkIkzP5cJUltKmlRoZLv4ScLtH';