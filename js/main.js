//Global vars
var textField = document.getElementById("search"), //search input
    trigger = document.getElementById("launch");  //launch button

//Triggered by the button!
function getGiphy() {
  var searchLimit = "&limit=8",
      searchRating = "&rating=pg",
      searchURL = "http://api.giphy.com/v1/gifs/search?q=",
      searchKey = "&api_key=dc6zaTOxFJmzC",
      searchString = textField.value.toLowerCase(),
      getGiphyAPI = searchURL + searchString.split(' ').join('+') + searchKey + searchLimit + searchRating;
  console.log(getGiphyAPI);

  function reqLoading(){
    var progressIndicator = document.createElement("p");
    progressIndicator.setAttribute("id","loading-text")
    document.getElementById("galleryWrap").appendChild(progressIndicator);
    document.getElementById("loading-text").innerHTML = "LOADING";
  }

  function reqListener() {
    var searchData = this.response,
        searchObj = JSON.parse(searchData);
    document.getElementById("galleryWrap").innerHTML = ""; //clears results
    searchObj.data.forEach(function(obj) { //gif amount = searchLimit, for each:
      var gifImages = document.createElement("div");
      gifImages.setAttribute("class", "gallery-gif"); //set classes, setAttribute not dry
      gifImages.setAttribute("style", "background-image: url(" + obj.images.fixed_height.url + ");"); //set bg images, not dry
      document.getElementById("galleryWrap").appendChild(gifImages); //+ images to the DOM
    }); //logs all bitly_urls
  }

  //Get the data from Giphy API
  var oReq = new XMLHttpRequest();
  //needs a loading function
  oReq.addEventListener("progress", reqLoading);
  oReq.addEventListener("load", reqListener);
  oReq.open("GET",getGiphyAPI, true);
  oReq.send();
}
document.getElementById("search").onkeyup = function(event){
  if(event.keyCode == 13){
    document.getElementById("launch").click();
  }
};
