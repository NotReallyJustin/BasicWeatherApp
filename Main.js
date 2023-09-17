const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBws4-V4Qshy4SRuh51GjO7q7GnS8HDmKge5mh_1XhLsaQ_QyEGAAhFQNbYG8qiKRrdrnNf1GNo1T1TaNmqFUXJPdtx_3dnzX7d3ZZaM6V8K9QfyUpkdDy_EWfmPr50YIjloI";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBws4-V4Qshy4SRuh51GjO7q7GnS8HDmKge5mh_1XhLsaQ_QyEGAAhFQNbYG8qiKRrdrnNf1GNo1T1TaNmqFUXJPdtx_3dnzX7d3ZZaM6V8K9QfyUpkdDy_EWfmPr50YIjloI";
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