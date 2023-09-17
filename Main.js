const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBwig-QBe4X47XrOy90EB5OVAg7JxnC3RMChTzd6W3pJ-_sR6sIBc4hyCUjwziPF4ApwPeu16egOZM2imabKUKcEyJC-GgZFBk80Ud6SKTJInyUEmD7rAFwk4fFScW1tGNMMm";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBwig-QBe4X47XrOy90EB5OVAg7JxnC3RMChTzd6W3pJ-_sR6sIBc4hyCUjwziPF4ApwPeu16egOZM2imabKUKcEyJC-GgZFBk80Ud6SKTJInyUEmD7rAFwk4fFScW1tGNMMm";
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