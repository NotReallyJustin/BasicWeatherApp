const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBwkvjmcAIjR2i5xPTFs9X7XwoazhdWC3_ZD1oIQdPmnKIgMmzHElj1_y1mbgEGPkO2KGaUwyqRoaxJCcHgu8RhkjfJzIhEMFaK0pL1lz-i0q211iD-0njvZ7dsLWXwR7HRAU";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBwkvjmcAIjR2i5xPTFs9X7XwoazhdWC3_ZD1oIQdPmnKIgMmzHElj1_y1mbgEGPkO2KGaUwyqRoaxJCcHgu8RhkjfJzIhEMFaK0pL1lz-i0q211iD-0njvZ7dsLWXwR7HRAU";
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