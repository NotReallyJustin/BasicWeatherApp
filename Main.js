const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBwL0vXfcFjes33jpOCyQo4SaxI28DX2NDe8XAmbuE_XaF0YXCFzifVGGm0Jd_3Gn-Hc8ZxKRDkNMEVlozBkq50ni9kC6gdFBcDdG2RoL89BZbhBFNjxzf1WNOoacyMfcXIgi";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBwL0vXfcFjes33jpOCyQo4SaxI28DX2NDe8XAmbuE_XaF0YXCFzifVGGm0Jd_3Gn-Hc8ZxKRDkNMEVlozBkq50ni9kC6gdFBcDdG2RoL89BZbhBFNjxzf1WNOoacyMfcXIgi";
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