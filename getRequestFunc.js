export function getRequestFunc() {
    const getRequest = new XMLHttpRequest();
    getRequest.open("GET", "https://www.cbr-xml-daily.ru/daily_json.js", false);
    getRequest.onload = function getOnload() {
        try {
            const responseJson = getRequest.responseText;
            const exchangeRates = JSON.parse(responseJson);
            return exchangeRates;
        } catch (e) {
            console.log("Error getOnload: " + e);
        }
    }
    getRequest.send(null);
    return getRequest.onload();
}


