const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBwtHP9Xx616z8wtrKVuZLcUGK46BCNhSpt2L1CFR7-3BT4k3BIzZIlCbBzLDC-2GczPkwh9ngwnAJuwSQ05xZ8W4RtgGlPDAmUvw39sn-mPPqp8czrN4YSCYyCoaU5xnrrd2";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBwtHP9Xx616z8wtrKVuZLcUGK46BCNhSpt2L1CFR7-3BT4k3BIzZIlCbBzLDC-2GczPkwh9ngwnAJuwSQ05xZ8W4RtgGlPDAmUvw39sn-mPPqp8czrN4YSCYyCoaU5xnrrd2";
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