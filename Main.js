const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBwlSjkGtWVzl6YHzfnML1TPVfE72KipdLDqTXWU71D4U7EDSIgbZCLCHZdQzrvCbLDiohjruS8fR7GIq7C7XpvbIAusu96D3gDr23OXK_NWZOsnvVYX_e8jFYXJMK0pAwJJh";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBwlSjkGtWVzl6YHzfnML1TPVfE72KipdLDqTXWU71D4U7EDSIgbZCLCHZdQzrvCbLDiohjruS8fR7GIq7C7XpvbIAusu96D3gDr23OXK_NWZOsnvVYX_e8jFYXJMK0pAwJJh";
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