exports.parseCode = function( cityData ) {
    var weatherDat = cityData.weather;
    if ( weatherDat === weatherDat ) {
        return weatherDat[0].icon.substring(0,2);
    }
    return null;
};