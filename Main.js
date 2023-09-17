const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBxDjhpm_y0rCyov2wwrsKc0g7kmTq-jpoTIRcZ98g1xgWIotxdIczvg5ElujapkK6FxpLT4tPH23lOgBQ08mORKIYhgJqIHqWf01AjLvwO0J8D2nwSG_QuCnijIcZrLKRuCW";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBxDjhpm_y0rCyov2wwrsKc0g7kmTq-jpoTIRcZ98g1xgWIotxdIczvg5ElujapkK6FxpLT4tPH23lOgBQ08mORKIYhgJqIHqWf01AjLvwO0J8D2nwSG_QuCnijIcZrLKRuCW";
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