const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBykdOsk1ulWSKU6SmcZJ0DVFrUHRsOKNafeyElYcH-9kFHzoLN6yBpFUeT_uPRSbrwK_7b9jHyfFSZVl2Fhaz2OGY1N5DauWRxSSdqknJH6rHAeM8Xe8gZZeRHB90XxerzkE";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBykdOsk1ulWSKU6SmcZJ0DVFrUHRsOKNafeyElYcH-9kFHzoLN6yBpFUeT_uPRSbrwK_7b9jHyfFSZVl2Fhaz2OGY1N5DauWRxSSdqknJH6rHAeM8Xe8gZZeRHB90XxerzkE";
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