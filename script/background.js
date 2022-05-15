let slideNum = 0;
showBackSlides();

function showBackSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideNum++;
  if (slideNum > slides.length) {slideNum = 1}
  slides[slideNum-1].style.display = "block";
  setTimeout(showBackSlides, 5000); // Change image every 5 seconds
}