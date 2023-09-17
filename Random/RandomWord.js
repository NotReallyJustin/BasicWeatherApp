const https = require('https');

module.exports = () => new Promise((resolve, reject) => {
    https.get('https://api.api-ninjas.com/v1/randomword', {
        headers: {
            //idk if this API key works because the temp email kinda expired
            'X-Api-Key': 'gAAAAABlBxDqaHE9crn6CgYFtQWT0g59KoYYIjBTCLRHkQ3SoUIEeBOdHmmIUyqsU6dRkLj1ESvHiJIEMJsohx0QPGRckYpmQOBIrTnpgKY1UQ4T_pH8FBscRClSvGUwhBAEf70KCtk3'
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

let randomThingy = 'gAAAAABlBxDqhhGFTYJWHvJPBUevf5qx7jtuEDCVqSBQw4f3caM2GACpyc_3tY2EM1jJFKE2Uak7fSbM-eM9CTJpT9TwV1ABwv-ZR2bu5FK1stReelWV2dPtk7PaJYj2LS3r5I8urtcJ';