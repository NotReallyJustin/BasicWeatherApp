const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBwuN-pJFvkoMnO1M0n3SnoYzyA6qV2MdljRR7iTltyoxSf0fchn4HcLwsFGqrBOein-ezpv3G-lob0aBpNpzdUmZpXymVq0wF2T4AcLy_H-OrxqXFO8ZFlaAkPjvJqYwGs6M";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBwuN-pJFvkoMnO1M0n3SnoYzyA6qV2MdljRR7iTltyoxSf0fchn4HcLwsFGqrBOein-ezpv3G-lob0aBpNpzdUmZpXymVq0wF2T4AcLy_H-OrxqXFO8ZFlaAkPjvJqYwGs6M";
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