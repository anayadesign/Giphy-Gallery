//Global vars
var textField = document.getElementById("search"), //search input
    trigger = document.getElementById("launch"),  //launch button
    output = document.getElementById("print");

//Triggered by the button!
function getGiphy() {
  var searchLimit = "9",
      urlBuild1 = "http://api.giphy.com/v1/gifs/search?q=",
      urlBuild2 = "&api_key=dc6zaTOxFJmzC&limit=" + searchLimit,
      searchString = textField.value.toLowerCase(),
      searchAPI = urlBuild1 + searchString.split(' ').join('+') + urlBuild2;
  console.log(searchString);
  console.log(searchAPI);


  function reqListener() {
    console.log("loading");
    console.log(this.responseText);
    console.log("FINISHED");
  }

  //Get the data from Giphy API
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET",searchAPI, true);
  oReq.send();
}
