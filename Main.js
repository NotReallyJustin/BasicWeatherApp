const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBwdFPtOWqZPZsDiG8_ToBCloCa4pnxwsI3fZqRs3I6QoOLAViDCn8Wq4GQ4wydUXHfOU9h-l_awSAMmLMBFFE-LDgWHWTh0wvLrT7YEQpB94hFWYeVY9dIKDFpsjxV8ZU1gV";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBwdFPtOWqZPZsDiG8_ToBCloCa4pnxwsI3fZqRs3I6QoOLAViDCn8Wq4GQ4wydUXHfOU9h-l_awSAMmLMBFFE-LDgWHWTh0wvLrT7YEQpB94hFWYeVY9dIKDFpsjxV8ZU1gV";
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