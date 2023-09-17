const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBwv4eLXSjpRd31ILc3hzaZkC_umSo0rAEKX2tlKOxxJ1isNkSiLkLivAOBDWyZttGMisrGgrgch_KM8keGeKGQmx6ym3nO9GMod88C4c_tcUuIM84iQcGPvSDohbYIV6jwn0";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBwv4eLXSjpRd31ILc3hzaZkC_umSo0rAEKX2tlKOxxJ1isNkSiLkLivAOBDWyZttGMisrGgrgch_KM8keGeKGQmx6ym3nO9GMod88C4c_tcUuIM84iQcGPvSDohbYIV6jwn0";
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