const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBxDqhhGFTYJWHvJPBUevf5qx7jtuEDCVqSBQw4f3caM2GACpyc_3tY2EM1jJFKE2Uak7fSbM-eM9CTJpT9TwV1ABwv-ZR2bu5FK1stReelWV2dPtk7PaJYj2LS3r5I8urtcJ";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBxDqhhGFTYJWHvJPBUevf5qx7jtuEDCVqSBQw4f3caM2GACpyc_3tY2EM1jJFKE2Uak7fSbM-eM9CTJpT9TwV1ABwv-ZR2bu5FK1stReelWV2dPtk7PaJYj2LS3r5I8urtcJ";
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