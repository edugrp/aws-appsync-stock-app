
const https = require('https');
const httpsGet = (defaultOptions, payload) => new Promise((resolve, reject) => {
    const options = { ...defaultOptions, method: 'GET' };
    const req = https.request(options, res => {
        let buffer = "";
        res.on('data', chunk => buffer += chunk)
        res.on('end', () => resolve(JSON.parse(buffer)))
    });
    req.on('error', e => reject(e.message));
    req.write(JSON.stringify(payload));
    req.end();
});

function jsonToQueryString(json) {
    return Object.keys(json).map(function(key) {
            return encodeURIComponent(key) + '=' +
                encodeURIComponent(json[key]);
        }).join('&');
}

exports.handler = async (event, context) => {
    // console.info("EVENT\n" + JSON.stringify(event))
    const arguments = jsonToQueryString(event.arguments);
    const options = {
        host: 'yh-finance.p.rapidapi.com',
        path: '/market/get-trending-tickers?' + arguments,
        port: 443,
        headers: {
          'x-rapidapi-host': 'yh-finance.p.rapidapi.com',
          'x-rapidapi-key': '902e6870f5mshd04861c21fc32b9p1337aajsn1a9985b4179e',
          'Host': 'yh-finance.p.rapidapi.com'
        }
      };

    var status_info = await httpsGet(options, '');
    // console.info("status_info\n" + JSON.stringify(status_info));

    return status_info.finance.result[0];
};
