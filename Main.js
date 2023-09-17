const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBwt7iYs7RWiUSO0npduOv4K8uMcZdS0cC2S9Au2Osd038p6xL-kgBdwOLn4-MFWhwwj0md9pY9Vu7tPVWg3dT0i5lxYa4a0r2tSxmDcJhf8hRdyC7Zp1b9Rs8bt9V2TqsXRU";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBwt7iYs7RWiUSO0npduOv4K8uMcZdS0cC2S9Au2Osd038p6xL-kgBdwOLn4-MFWhwwj0md9pY9Vu7tPVWg3dT0i5lxYa4a0r2tSxmDcJhf8hRdyC7Zp1b9Rs8bt9V2TqsXRU";
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