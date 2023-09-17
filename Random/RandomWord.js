const https = require('https');

module.exports = () => new Promise((resolve, reject) => {
    https.get('https://api.api-ninjas.com/v1/randomword', {
        headers: {
            //idk if this API key works because the temp email kinda expired
            'X-Api-Key': 'gAAAAABlBxJfDYGyC1JDQOUGeNLQkdWEt5b2nvFvQhgX9rTNrJ5N05EQn-Qb-prXAUSOmBI_xXS5y7IAYmh7bIJwphX6br1_2zwAiU29qhP3Rw0zWVk8WJc='
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

let randomThingy = 'gAAAAABlBxJfLnBrmfusxev_sk35djUc4QV8ajWQ81C2bd1TJB9ItpYN9J6ID4wLs51IJJldJgpOStzoRpXW1kaTEKppj0xKMqU3VwUoi3PW00cv5nJDCZ9ee4V7daZ-mfnSbtNUgp2y';