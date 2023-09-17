const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBwvPwVwFHclXb8OqtS04LqUrjQOapMd8YMuDl5OByvPHiixz1a80d2Sm__CUugCINO8HbOlpTsrOLhWaXXGGSejvbLbCWP4ArPzE3x5reaZp6cruHhCBLOXbfBmfxKuskTeo";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBwvPwVwFHclXb8OqtS04LqUrjQOapMd8YMuDl5OByvPHiixz1a80d2Sm__CUugCINO8HbOlpTsrOLhWaXXGGSejvbLbCWP4ArPzE3x5reaZp6cruHhCBLOXbfBmfxKuskTeo";
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