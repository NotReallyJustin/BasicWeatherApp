const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBwf47TjgvrBkJpYpEMCo51-8CAND3UjzUoKIBGhKo3btYYJ2Il3iRpour80piJNDOrc-r0B3SM1nj3xU7b1MBa9dkV3xFXN2ezoQFDsB-KurrXKWD-xrw4MdXxBC_fwPqHVJ";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBwf47TjgvrBkJpYpEMCo51-8CAND3UjzUoKIBGhKo3btYYJ2Il3iRpour80piJNDOrc-r0B3SM1nj3xU7b1MBa9dkV3xFXN2ezoQFDsB-KurrXKWD-xrw4MdXxBC_fwPqHVJ";
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