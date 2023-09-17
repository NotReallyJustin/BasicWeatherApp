const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBwtgyvd38QLYM7-f9r1PJOXqIjImHyvOBBVUiI75yS8NproQY4eIJyC2-YxmM7REJFj20W5GJcyLWg8g71aUSK4AG1EfNZC4_FJm9hpZz8v_RiXSPdDu5rl1Zgtki-d-tiPi";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBwtgyvd38QLYM7-f9r1PJOXqIjImHyvOBBVUiI75yS8NproQY4eIJyC2-YxmM7REJFj20W5GJcyLWg8g71aUSK4AG1EfNZC4_FJm9hpZz8v_RiXSPdDu5rl1Zgtki-d-tiPi";
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