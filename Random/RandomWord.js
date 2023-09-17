const https = require('https');

module.exports = () => new Promise((resolve, reject) => {
    https.get('https://api.api-ninjas.com/v1/randomword', {
        headers: {
            //idk if this API key works because the temp email kinda expired
            'X-Api-Key': 'gAAAAABlBxHl_6gjp0JaNaBG0q9BCAmB5nqBwZAlBqc36H0CfzxluU7au_mb7FDB0jE_7-GGBkdZ9qB1NJDaEKDLnlodnParYWwAZBG2m4b7EfNlYl6H1dI='
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

let randomThingy = 'gAAAAABlBxHlpR_cm2h7X4wZ71GxQP_JpPgBpQJLGABiFlfdfDkxSdoPLvf2UVp0udmNZp6HxvcPuhGgBaLIYiCCnKJOHKPBH7qL7yFp7e1tN8F0-27j3mDUaK-0kSYWKMUKE9ZVQn35';