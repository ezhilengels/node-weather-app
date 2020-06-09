const request = require('request');
const geocode = (address, callback) => {
    const mapUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiZXpoaWxlbmdlbHMiLCJhIjoiY2theG15dnNsMDdyaDJ4bzJjd25uNm05aSJ9.c-osAm-kuwotGIuNvaF0kA&limit=1';
    request({url: mapUrl, json: true}, (error, response) => {
        if(error) {
            callback('mapurl app is Down', undefined);
        } else if (!response.body.features.length) {
            callback('location not found', undefined);
        } else {
            const currentObj = response.body.features[0];
            callback(undefined, {
                lattitude: currentObj.center[1],
                longitude: currentObj.center[0],
                location: currentObj.place_name
            });
        }
    });
}

module.exports = geocode;
