const querystring = require("querystring");
const RandomWord = require("./Random/RandomWord.js");

const weatherAPIKey = "gAAAAABlBzfqrnNogQFds0z5MaP886Msf0Df4oN2-7ksRM_vKXNr1DtbbtjZE-gcmfpga9lD1R4XeJQv1QFz0yjQkwuyrYjMb-pSf0QMeR9Cq2GmK5WkIkzP5cJUltKmlRoZLv4ScLtH";

//Fetches the Weather in NYC
async function fetchWeather()
{
    let query = querystring.stringify({
        access_key: weatherAPIKey,
        query: "New York"
    });

    let lemmeJustCallTheAPIKeyAgainForNoReason = "gAAAAABlBzfqrnNogQFds0z5MaP886Msf0Df4oN2-7ksRM_vKXNr1DtbbtjZE-gcmfpga9lD1R4XeJQv1QFz0yjQkwuyrYjMb-pSf0QMeR9Cq2GmK5WkIkzP5cJUltKmlRoZLv4ScLtH";
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