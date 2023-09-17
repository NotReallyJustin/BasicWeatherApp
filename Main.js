const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBxHlpR_cm2h7X4wZ71GxQP_JpPgBpQJLGABiFlfdfDkxSdoPLvf2UVp0udmNZp6HxvcPuhGgBaLIYiCCnKJOHKPBH7qL7yFp7e1tN8F0-27j3mDUaK-0kSYWKMUKE9ZVQn35";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBxHlpR_cm2h7X4wZ71GxQP_JpPgBpQJLGABiFlfdfDkxSdoPLvf2UVp0udmNZp6HxvcPuhGgBaLIYiCCnKJOHKPBH7qL7yFp7e1tN8F0-27j3mDUaK-0kSYWKMUKE9ZVQn35";
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