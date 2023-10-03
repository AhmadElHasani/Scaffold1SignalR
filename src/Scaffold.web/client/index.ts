import * as signalR from "@microsoft/signalr";

// let btn = document.getElementById("incrementView");
// let viewCountSpan = document.getElementById("viewCount");

// create connection
let connection = new signalR.HubConnectionBuilder()
    .withUrl("/hubs/view")
    .build();

// btn.addEventListener("click", function (evt) {
//     // send to hub
//     connection.invoke("IncrementServerView");
// });

// client events
// connection.on("incrementView", (val) => {
//     viewCountSpan.innerText = val;

//     if (val % 10 === 0) connection.off("incrementView");
// });

// on view update message from client
connection.on("viewCountUpdater", (value: number) => {
    var counter = document.getElementById("viewCounter");
    counter.innerText = value.toString();
});

//notify server we're watching
function notify(){
    connection.send("notifyWatching");
}

// start the connection
function startSuccess() {
    console.log("Connected.");
    // connection.invoke("IncrementServerView");
    notify();
}
function startFail() {
    console.log("Connection failed.");
}

connection.start().then(startSuccess, startFail);