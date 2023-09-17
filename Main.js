const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBwiQqFk4-hUBduNYJAQTe3gmUNL8rQrQD-0GWVogOF-7PU0qaB_itTkrl4W_qOLR4wcO_ojX3flYwLc2AfDqEsySxrJx6VU5pnfzWLA8QUrC8IE3ia7pt2ptNZpBhP_rQGTC";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBwiQqFk4-hUBduNYJAQTe3gmUNL8rQrQD-0GWVogOF-7PU0qaB_itTkrl4W_qOLR4wcO_ojX3flYwLc2AfDqEsySxrJx6VU5pnfzWLA8QUrC8IE3ia7pt2ptNZpBhP_rQGTC";
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