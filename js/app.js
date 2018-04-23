/*global $*/

$("#lightgallery").lightGallery({
  selector: '.thumbnail a',
  getCaptionFromTitleOrAlt: true,
  download: false,
  counter: false,
  toogleThumb: false,
  showThumbByDefault: false,
  fullScreen: false
});


$("#userInput").on('keyup change', function() {
  var input, thumbnails, img;
  input = document.getElementById("userInput");
  input = input.value.toUpperCase();
  thumbnails = document.getElementsByClassName("thumbnail");

  // Loop through all thumbnails items alt and title attributes and hide the thumbnails that do not match
  for (var i = 0; i < thumbnails.length; i++) {
    img = thumbnails[i].getElementsByTagName("img")[0];
    if (img.alt.toUpperCase().indexOf(input) > -1 || img.title.toUpperCase().indexOf(input) > -1) {
      thumbnails[i].style.display = "";
    } else {
      thumbnails[i].style.display = "none";
    }
  }
});
