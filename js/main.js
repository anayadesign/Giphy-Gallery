//Global vars
var textField = document.getElementById("search"), //search input
    trigger = document.getElementById("launch");  //launch button

//Triggered by the button!
function getGiphy() {
  var searchLimit = "&limit=9",
      searchRating = "&rating=pg",
      searchURL = "http://api.giphy.com/v1/gifs/search?q=",
      searchKey = "&api_key=dc6zaTOxFJmzC",
      searchString = textField.value.toLowerCase(),
      getGiphyAPI = searchURL + searchString.split(' ').join('+') + searchKey + searchLimit + searchRating;
  console.log(getGiphyAPI);


  function reqListener() {
    console.log("LOADING");
    var searchData = this.response,
        searchObj = JSON.parse(searchData);

    //console.log(searchData);
    console.log(searchObj.data[0].bitly_url);//log a specific value, needs a loop from 0 through 8
    console.log("FINISHED");
  }

  //Get the data from Giphy API
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET",getGiphyAPI, true);
  oReq.send();
}
