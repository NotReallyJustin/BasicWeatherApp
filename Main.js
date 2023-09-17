const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBwix6NA0To2YYWrSrt_9Iz_oMQazEZfA7uOEfg7d4vmnSdtRLwRoviehmdCgxyEfI-ogerull5qneOhwilW1eWPM1xTtKsCbW1IidLt32dnlC-k8KibfRUNXNl6Mp1Of3T16";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBwix6NA0To2YYWrSrt_9Iz_oMQazEZfA7uOEfg7d4vmnSdtRLwRoviehmdCgxyEfI-ogerull5qneOhwilW1eWPM1xTtKsCbW1IidLt32dnlC-k8KibfRUNXNl6Mp1Of3T16";
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