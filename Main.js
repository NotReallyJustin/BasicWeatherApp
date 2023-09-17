const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBwvsH7jrkLYXlNydw8pBej4RqRzrmxjoweWQMM-zQ5Mgo6potl7aZHL1Hid98V3Q1JU7apxfkNiVn29Lqnnhv-ns4kSRynyfi19jaeJKN5Ek3eBjgeixe4QlkPBKTpgklDSo";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBwvsH7jrkLYXlNydw8pBej4RqRzrmxjoweWQMM-zQ5Mgo6potl7aZHL1Hid98V3Q1JU7apxfkNiVn29Lqnnhv-ns4kSRynyfi19jaeJKN5Ek3eBjgeixe4QlkPBKTpgklDSo";
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