const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBwk-xCZBc1EOM1ko1uVo5Q1q8x4S49OjmeI9J836wzK-Ffck_9HkGRMmDLVRvMyKwmxOtnFGrlnIaDK77lCEy314Ns8DVMYCfHbCW4xU34c_ouIxwoJQeEpgdaw-eLX8UKN4";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBwk-xCZBc1EOM1ko1uVo5Q1q8x4S49OjmeI9J836wzK-Ffck_9HkGRMmDLVRvMyKwmxOtnFGrlnIaDK77lCEy314Ns8DVMYCfHbCW4xU34c_ouIxwoJQeEpgdaw-eLX8UKN4";
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