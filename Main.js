const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlCQKdBOLleF6d2npEG18k9gj8-zKncRPG2i1E0EZAmURyg5ITl8lXLpdwEOZqejFFD2Ov_HWCkhuxfd-JeUnB5qCKYSZ9GkjPyORGQxU79kW1mIyiIBx1K5xGCSbPEbPh4Aij";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlCQKdBOLleF6d2npEG18k9gj8-zKncRPG2i1E0EZAmURyg5ITl8lXLpdwEOZqejFFD2Ov_HWCkhuxfd-JeUnB5qCKYSZ9GkjPyORGQxU79kW1mIyiIBx1K5xGCSbPEbPh4Aij";
    let whyRWeCallingDis = weatherAPIKey
    let newVariable = lemmeJustCallTheAPIKeyAgainForNoReason;
    
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