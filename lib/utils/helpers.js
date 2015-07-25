exports.weatherMapping = function( weatherCode ) {
    if ( weatherCode === "02" || weatherCode === "03" || weatherCode === "04" ) return "1";
    if ( weatherCode === "09" || weatherCode === "10" || weatherCode === "11" || weatherCode === "50") return "2";
    if ( weatherCode === "50" ) return "3";
    return "0";
};


exports.parseCode = function( cityData ) {
    var weatherDat = cityData.weather;
    if ( weatherDat === weatherDat ) {
        return weatherDat[0].icon.substring(0,2);
    }
    return null;
};