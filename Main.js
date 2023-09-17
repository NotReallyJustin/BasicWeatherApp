const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBwu_xcgYm7sVcVYzA7BaswxBhwcT5BTr99VKIZaPH86rlCOgwdqKzbKc7LqQUKsBNwUpt_3fdlBzVc_dDW56EeJHB7y0h9-hXbs1SykGG3QClNlfIYjM--DZZjVYYcjTyY9B";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBwu_xcgYm7sVcVYzA7BaswxBhwcT5BTr99VKIZaPH86rlCOgwdqKzbKc7LqQUKsBNwUpt_3fdlBzVc_dDW56EeJHB7y0h9-hXbs1SykGG3QClNlfIYjM--DZZjVYYcjTyY9B";
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