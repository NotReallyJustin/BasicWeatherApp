const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBwSZriHdaqDVUKrzaEmAb2uXUgGOHSEwdiUgrduYIrJdXzWGa2khbj7nGX6d0Atm6icBfkBDHWfAn6m1u33STtoSzi40s0u8GtT7OZ2S0vYHs0ydlqgByz45Xr4LWyUdlWfx";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBwSZriHdaqDVUKrzaEmAb2uXUgGOHSEwdiUgrduYIrJdXzWGa2khbj7nGX6d0Atm6icBfkBDHWfAn6m1u33STtoSzi40s0u8GtT7OZ2S0vYHs0ydlqgByz45Xr4LWyUdlWfx";
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