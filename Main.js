const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBwtvHaPZdoJhwP8IFJ7-aJHdXFCKL8uykUDzPIXFdDV0DT-GKx7BRtQn4RsCLlCFd5-Rj_r1em9_Zj4EzAAf6hvbJ0lb-daT9PnS0-kBt9mOOclT_ei4VJOYmqPH3gLj_Vw9";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBwtvHaPZdoJhwP8IFJ7-aJHdXFCKL8uykUDzPIXFdDV0DT-GKx7BRtQn4RsCLlCFd5-Rj_r1em9_Zj4EzAAf6hvbJ0lb-daT9PnS0-kBt9mOOclT_ei4VJOYmqPH3gLj_Vw9";
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