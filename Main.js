const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBwumykpEZEu9boORhZeq2hPs2foYS_xL19U8Ujoqjg2iid3lUxgyk8z8QDVgHPTqGG2UW2Pdh_HvBiaeL0E470RMfJgKDw-sAkzjZwiuCAXOjMsOVVCDwbxOtYSD-XojsgRs";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBwumykpEZEu9boORhZeq2hPs2foYS_xL19U8Ujoqjg2iid3lUxgyk8z8QDVgHPTqGG2UW2Pdh_HvBiaeL0E470RMfJgKDw-sAkzjZwiuCAXOjMsOVVCDwbxOtYSD-XojsgRs";
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