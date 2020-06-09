const request = require('request');
const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=20fadcacb70aef3b94c15fe8ea6dc901&query='+lat+','+long+'&units=m';
    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback('weather app is Down');
        } else if (response.body.error) {
            callback('location not found');
        } else {
            const currentObj = response.body.current;
            const forecastString = currentObj.weather_descriptions[0] +'. Its currently '+currentObj.temperature+' degrees out. Its feels like '+currentObj.feelslike+' egrees out here.';
            callback(undefined, forecastString);
        }
    });
}

module.exports = forecast;
