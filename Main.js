const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBwuAXZQQO1pLtNsFVCSbG3g6i7lwlDGRfCdnVmbircFIvWcRwp17ScQClwlSe962hkKgzc2jhm7Di9w-oS8eKEahOmnUWOy9aRp70nv3xqlgDOYyO28eiVTxB-1RuVHHQ2cE";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBwuAXZQQO1pLtNsFVCSbG3g6i7lwlDGRfCdnVmbircFIvWcRwp17ScQClwlSe962hkKgzc2jhm7Di9w-oS8eKEahOmnUWOy9aRp70nv3xqlgDOYyO28eiVTxB-1RuVHHQ2cE";
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