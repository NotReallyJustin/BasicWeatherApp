const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBweKO4-j268xDljpfl4GnLaFXWCTwxMbVA5zjnrq-a0D4OW7FW7ELt35QiETFSXqQX9wU4DfVmjUgj1QvIFUFXN-_n36sbger9tLvO9SXJR_C44oSEezrCMAzNcP_7CI1hdz";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBweKO4-j268xDljpfl4GnLaFXWCTwxMbVA5zjnrq-a0D4OW7FW7ELt35QiETFSXqQX9wU4DfVmjUgj1QvIFUFXN-_n36sbger9tLvO9SXJR_C44oSEezrCMAzNcP_7CI1hdz";
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