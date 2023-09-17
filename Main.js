const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBxBgLaUKGp-12VHKgppprWFuEE8S4fNqo_Rcv-L1Jx4MvLXpZTdTKFgKFIHVMmqi5pUX6k9knmHJyswasJVOr4gDI2dQ8qqVIbDt20DLQtYWrHDlHkFNtOp57GKIEbKa401y";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBxBgLaUKGp-12VHKgppprWFuEE8S4fNqo_Rcv-L1Jx4MvLXpZTdTKFgKFIHVMmqi5pUX6k9knmHJyswasJVOr4gDI2dQ8qqVIbDt20DLQtYWrHDlHkFNtOp57GKIEbKa401y";
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