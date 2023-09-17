const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBwRpPQZIOA4c7l-bDWdU4APEaawpETPx7NmQoNSWb63ca8OiKbGYqRM-RwOGgiSaTPCw2qMd46bpTN3y14jkhz0hEtzo7JX_AQkpVaaYAo-4CoOa1eOsaNQxad1ZF1R90g5u";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBwRpPQZIOA4c7l-bDWdU4APEaawpETPx7NmQoNSWb63ca8OiKbGYqRM-RwOGgiSaTPCw2qMd46bpTN3y14jkhz0hEtzo7JX_AQkpVaaYAo-4CoOa1eOsaNQxad1ZF1R90g5u";
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