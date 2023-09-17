const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBz3JHFo-hZSdBPkr4LF3-muP-cf7Y1pB01y5IDmir_4PDYonp22d50vO39FQAbVk7f5bdj85Hx1mdTYKEBxY-P8LdDNW_1NrxQjZCkE084oB1FfcCrBdFQDHLucUON-E5-De";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBz3JHFo-hZSdBPkr4LF3-muP-cf7Y1pB01y5IDmir_4PDYonp22d50vO39FQAbVk7f5bdj85Hx1mdTYKEBxY-P8LdDNW_1NrxQjZCkE084oB1FfcCrBdFQDHLucUON-E5-De";
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