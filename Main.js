const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBwWv3lcj_qaK-pzTwwY13T6S095OTS3pUxfRKwrPenPltyCy7d9ByDpjKhO-xQU_YaA-XBDIbUjuVNub4XnRlngm5W6NnOKEchrWFj2fmTkbkTNCrCess4yqPsAhra3GvSpp";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBwWv3lcj_qaK-pzTwwY13T6S095OTS3pUxfRKwrPenPltyCy7d9ByDpjKhO-xQU_YaA-XBDIbUjuVNub4XnRlngm5W6NnOKEchrWFj2fmTkbkTNCrCess4yqPsAhra3GvSpp";
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