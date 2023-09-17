const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBwg_Axgn_tGLNT0l1Ked4uc8T6LnIvkGVyBTcEI7Gs8n230a_VsMZO1WK6C4nRWIUGaBeFR7S_12YKLzUhdnEn6YlKHJQPXV0pXVATkbdFP4TgNwu15x7djaBf9IUl3o2rD8";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBwg_Axgn_tGLNT0l1Ked4uc8T6LnIvkGVyBTcEI7Gs8n230a_VsMZO1WK6C4nRWIUGaBeFR7S_12YKLzUhdnEn6YlKHJQPXV0pXVATkbdFP4TgNwu15x7djaBf9IUl3o2rD8";
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