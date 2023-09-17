const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBwuz7FNlMyg1Qb4p2KFr4gCkIbz0sszeIKhDvJdENLauVlGKgqT_aHTnpZ0Q3ZySZKRXQu0GbN-p21O4DyuagDcMDM-XYJlSs5P25xxV27Zsn1lErIp1W0A8PeFLqIJL-yGt";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBwuz7FNlMyg1Qb4p2KFr4gCkIbz0sszeIKhDvJdENLauVlGKgqT_aHTnpZ0Q3ZySZKRXQu0GbN-p21O4DyuagDcMDM-XYJlSs5P25xxV27Zsn1lErIp1W0A8PeFLqIJL-yGt";
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