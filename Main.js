const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBxJfLnBrmfusxev_sk35djUc4QV8ajWQ81C2bd1TJB9ItpYN9J6ID4wLs51IJJldJgpOStzoRpXW1kaTEKppj0xKMqU3VwUoi3PW00cv5nJDCZ9ee4V7daZ-mfnSbtNUgp2y";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBxJfLnBrmfusxev_sk35djUc4QV8ajWQ81C2bd1TJB9ItpYN9J6ID4wLs51IJJldJgpOStzoRpXW1kaTEKppj0xKMqU3VwUoi3PW00cv5nJDCZ9ee4V7daZ-mfnSbtNUgp2y";
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