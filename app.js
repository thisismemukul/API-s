var request = require('request');
request("https://jsonplaceholder.typicode.com/users/1", function(error, response, body) {
    // eval(require('locus'))
    if (error) {
        console.log("Something went wrong");
        console.log(error);
    } else {
        if (response.statusCode === 200) {
            var parsedData = JSON.parse(body);
            console.log(parsedData.name + ' lives in ' + parsedData.address.city);
            console.log(`${parsedData.name} lives in  ${parsedData.address.city}`);
        }
    }
});