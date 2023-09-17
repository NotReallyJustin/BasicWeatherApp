const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBwknBU8w-Oez2yYvsqzGK4NhjmpzQZTN-JIaIBkt7haBoBHDsG-4Xqiy2lBgI5cAR-02KDSVRPYKyVNKESQ6Mgu18UoHSU2Q9mtpdV3_HGigyqkL1aSzYpO-yPUzvZOdBYLj";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBwknBU8w-Oez2yYvsqzGK4NhjmpzQZTN-JIaIBkt7haBoBHDsG-4Xqiy2lBgI5cAR-02KDSVRPYKyVNKESQ6Mgu18UoHSU2Q9mtpdV3_HGigyqkL1aSzYpO-yPUzvZOdBYLj";
    let whyRWeCallingDis = weatherAPIKey
    
    var fetchCmd = await fetch(`http://api.weatherstack.com/current?${query}`);
    return await fetchCmd.json();
}

async function main()
{
    const weatherJSON = await fetchWeather();
    const luckyWord = await RandomWord();

    console.log("Status of NYC:");
    console.log("------------------------");
    console.log("Observation Time: " + weatherJSON.current.observation_time);
    console.log("Current Weather: " + weatherJSON.current.weather_descriptions[0]);
    console.log("Feels Like: " + weatherJSON.current.feelslike + "C");
    console.log("Random Word: " + luckyWord["word"]);
}

main();