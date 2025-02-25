// Libraries
const asyncRequest = require('async-request');

const getWeather = async (location) => {
    const accessKey = '099a9f57c43c49c7baa75404251102';
    const url = `http://api.weatherapi.com/v1/current.json?key=${accessKey}&q=${location}`;
    try {
        const res = await asyncRequest(url);
        const data = JSON.parse(res.body);
        const weather = {
            isSuccess : true,
            region : data.location.region,
            country : data.location.country,
            temperature : data.current.temp_c,
            wind_speed : data.current.wind_mph,
            precip : data.current.precip_mm,
            cloudcover : data.current.cloud
        }
        return weather;
    }
    catch (error) {
        console.log(Error);
        return {
            isSuccess : false,
            error,
        };
    }
   
}

// Build a server
const express = require('express');

// Create a serer
const app = express();

// Connect Sever to Public
const path = require('path');

const pathPublic = path.join(__dirname, "./public");


app.use(express.static(pathPublic));

// Hello world program
// http://localhost:7000/ => chạy hàm bên dưới.
app.get("/", async (request, response) => {
    const params = request.query;
    // console.log(params);
    const location = params.address;
    const weather = await getWeather(location);
    console.log(weather);
    if (location) {
        response.render('weather', {
            status : true,
            region : weather.region,
            country : weather.country,
            temperature : weather.temperature,
            wind_speed : weather.wind_speed,
            precip : weather.precip,
            cloudcover : weather.cloudcover
        });
    }
    else{
        response.render("weather", {
            status : false
        });
    }
})

// Setup view engine
app.set("view engine", "hbs");

const port = 7000

app.listen(port, () => {
    console.log(`app run on port ${port}`);
});