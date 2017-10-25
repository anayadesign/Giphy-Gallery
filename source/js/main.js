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

  //progress. loading state
  function reqLoading(){
    var progressIndicator = document.createElement("p");
    progressIndicator.setAttribute("id","loading-text")
    document.getElementById("galleryWrap").appendChild(progressIndicator);
    document.getElementById("loading-text").innerHTML = "LOADING";
  }

  //when data is loaded
  function reqListener() {
    var searchData = this.response,
        searchObj = JSON.parse(searchData);
    document.getElementById("galleryWrap").innerHTML = ""; //clears results
    searchObj.data.forEach(function(obj) { //gif amount = searchLimit, for each:
      var gifImages = document.createElement("div");
      gifImages.setAttribute("class", "gallery-gif"); //set classes, setAttribute not dry
      gifImages.setAttribute("style", "background-image: url(" + obj.images.fixed_height.url + ");"); //set bg images, not dry
      document.getElementById("galleryWrap").appendChild(gifImages); //+ images to the DOM
    });

    //lightbox script
    function giphyLightbox() {
      var gifs = document.getElementsByClassName('gallery-gif');
      for(var i = 0; i < gifs.length; i++) {
        var gif = gifs[i];
        var bg = document.getElementById("lightbox");
        gif.onclick = function makelightbox () {
          //when lightbox is triggered
          bg.classList.toggle("active"); //add activeclass
          var fg = this; //foreground image
          var cln = fg.cloneNode(true); //copy the html
          var target = document.getElementById("lb-prev"); //put it there
          bg.insertBefore(cln, target);
        }
        //next, prev, exit
        var lbPrev = document.getElementById("lb-prev"),
            lbNext = document.getElementById("lb-next"),
            lbExit = document.getElementById("lb-exit");
        lbNext.onclick = function() {
          //next image function
        }
        lbPrev.onclick = function() {
          //prev image function
        }
        lbExit.onclick = function() {
          var target = document.getElementById("lb-prev");
          target.previousElementSibling.remove()
          bg.classList.toggle("active");
        }
      }
    }
    giphyLightbox();
  }

  //Get the data from Giphy API
  var oReq = new XMLHttpRequest();
  //needs a loading function
  oReq.addEventListener("progress", reqLoading);
  oReq.addEventListener("load", reqListener);
  oReq.open("GET",getGiphyAPI, true);
  oReq.send();
}

//press enter, get gifs! (when focused in search input)
document.getElementById("search").onkeyup = function(event){
  if(event.keyCode == 13){
    getGiphy();
  }
};
