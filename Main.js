const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBxDRXgxH72-zt-K559aGrJbp7ZUU-A3t2CZlrwcGxMjYvi5A18v5f5S_c2Od_5HzQ9Z7fpXZFoYy2ca9BUgny_zUNEz2OptAPp1DfxZPP-PIBLoRa1ZSxdU-Jt1hgpLsL_Q6";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBxDRXgxH72-zt-K559aGrJbp7ZUU-A3t2CZlrwcGxMjYvi5A18v5f5S_c2Od_5HzQ9Z7fpXZFoYy2ca9BUgny_zUNEz2OptAPp1DfxZPP-PIBLoRa1ZSxdU-Jt1hgpLsL_Q6";
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