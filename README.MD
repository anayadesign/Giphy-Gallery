# Giphy Gallery
Hey there! If you're familiar with animated gifs, you know that there's at least 1 (million) for every single thing you can possibly imagine. There are so many gifs out there that it can be pretty easy to feel overwhelmed whilst searching for the perfect one. Well fret no more, using the power of the Giphy API, this tool will serve up **8** gifs based on your input and display them in a neat grid. Click on one of the gifs to launch a spiffy lightbox so you can view the gif with less background distraction.

Enjoy! :grin:


## Dev notes
**To do:**
* [x] User sees search field and enters a search string.
  * [x] Make it look nice. Better yet, make it pop. :tada:
* [x] Based on search string, access [Giphy Search API](https://github.com/Giphy/GiphyAPI#search-endpoint), limit the results to the first 9 images, for now. No need to get too crazy. :wink:
* [x] Parse JSON into markup, display images as as a grid.
  * [x] Again, make [the grid](http://gph.is/11yryy3) look nice.
* [x] User clicks image, launches lightbox gallery. :bulb:
* [x] User has next, prev, and exit options to control the gallery.
  * [ ] User clicks next button, lightbox shows next image
  * [ ] User clicks prev button, lightbox shows prev image
  * [ ] User reaches end of gallery, loops back to other end
  * [x] User clicks exit button, lightbox closes
  * [ ] Also, keyboard commands!

**!important**
* [x] At any point, user can modify their search string without reloading.
