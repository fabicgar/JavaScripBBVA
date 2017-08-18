var url = "https://ironhack-characters.herokuapp.com/characters"

var headers = new Headers();
headers.append("Content-Type", "application/json");

let config = {
    method: "GET",
    headers: headers
};

fetch(url, config).then(function(response) {

    console.log("RESPONSE");
    console.log(response);

    response.json().then(function(data) {
        //do something with your data
        console.log("DATA");
        console.log(data)
    });
});