const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBwtmJ8BeC8dHKDPwf0xvp28dXAtBgrzbd1EWNhhkXUItboapcnkKeta-M__gYZ_egH5TH5HGkwxE7nIe7-160e9efR8aHACAK3Nj-gUf6LtLXf5wuX15ChvF4lbvWQFMjFME";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBwtmJ8BeC8dHKDPwf0xvp28dXAtBgrzbd1EWNhhkXUItboapcnkKeta-M__gYZ_egH5TH5HGkwxE7nIe7-160e9efR8aHACAK3Nj-gUf6LtLXf5wuX15ChvF4lbvWQFMjFME";
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