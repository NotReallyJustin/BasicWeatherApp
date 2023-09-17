const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBwt1qnOUZDGqvJgtASF6GLm-ovJAej_DC6Lhsu178bFMqkSN5jJqbdsy_tUjNqC23KjMWKcPTczp31mazn1_rKi5X3xDcdSzsy2sQCdoYeiut8W4uMb8OtBCyCM_30NvZ3s0";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBwt1qnOUZDGqvJgtASF6GLm-ovJAej_DC6Lhsu178bFMqkSN5jJqbdsy_tUjNqC23KjMWKcPTczp31mazn1_rKi5X3xDcdSzsy2sQCdoYeiut8W4uMb8OtBCyCM_30NvZ3s0";
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