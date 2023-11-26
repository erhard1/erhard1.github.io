/* when the window is finished loading then call
the function that adds the tab index attribute to each preview image
and the onfocus and onblur listeners

window.onload =  function(){ setup_images();};*/

function upDate(previewPic) {
  /* grabbing the object at the image ID */

  let my_element = document.getElementById("image");

  console.log("gallery preview active: " + previewPic.alt);

  /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image */

  my_element.style.backgroundImage = "url('" + previewPic.src + "')";

  /* 2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */

  my_element.innerHTML = previewPic.alt;
}

function unDo() {
  /* grabbing the object at the image ID */

  let my_element = document.getElementById("image");

  /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was */

  my_element.style.backgroundImage = "url()";

  /* 2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */

  my_element.innerHTML = "Hover over an image below to display here.";
}

/* Adding the tab index set to 0 for all the preview images.
I also added the onfocus and onblur eventlisteners in the same loop.
Note: I couls have done the onmouseover and onmouseout listeners the same way.*/
function setup_images() {
  console.log("window loaded and updating the image event listeners");
  currentImages = document.querySelectorAll(".preview");
  for (var i = 0; i < currentImages.length; i++) {
    currentImages[i].setAttribute("tabindex", "0");
    /* adding the onfocus and onblur event watchers to the image elements */
    currentImages[i].addEventListener("focus", function () {
      upDate(this);
    });
    currentImages[i].addEventListener("blur", function () {
      unDo();
    });
  }
}