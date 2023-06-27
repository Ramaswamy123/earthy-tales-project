// var swiper = new Swiper(".mySwiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//       rotate: 50,
//       stretch: 0,
//       depth: 100,
//       modifier: 1,
//       slideShadows: true,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//     },
//   });
function selectImage(imageIndex) {
    // Reset all images and buttons
    var images = document.getElementsByClassName("profile-image");
    var buttons = document.getElementsByClassName("dot-button");
  
    for (var i = 0; i < images.length; i++) {
      images[i].classList.remove("selected");
      buttons[i].classList.remove("dot-selected");
    }
  
    // Select the clicked image and button
    var selectedImage = document.getElementById("profile" + imageIndex);
    var selectedButton = document.getElementsByClassName("dot-button")[imageIndex - 1];
  
    selectedImage.classList.add("selected");
    selectedButton.classList.add("dot-selected");
  }


  //courosel with buttons
  var slider = document.querySelector('.slider');
  var sliderImages = document.querySelectorAll('.slider-image');
  var currentImageIndex = 1;
  
  function updateSlider() {
    var translateXValue = -currentImageIndex * (sliderImages[0].offsetWidth + 20);
    slider.style.transform = 'translateX(' + translateXValue + 'px)';
  
    // Remove the "visible" class from all images
    sliderImages.forEach(function(image) {
      image.classList.remove('visible');
    });
  
    // Add the "visible" class to the selected image
    sliderImages[currentImageIndex].classList.add('visible');
  }
  
  function slideLeft() {
    if (currentImageIndex > 0) {
      currentImageIndex--;
    }
    updateSlider();
  }
  
  function slideRight() {
    if (currentImageIndex < sliderImages.length - 1) {
      currentImageIndex++;
    }
    updateSlider();
  }
  
  updateSlider();
  