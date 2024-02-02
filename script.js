document.addEventListener('DOMContentLoaded', function () {
    var slideshow = document.getElementById('slideshow');
    var images = slideshow.getElementsByTagName('img');
    var currentIndex = 0;
    var intervalDuration = 1000; 
  
    function showImage(index) {
      for (var i = 0; i < images.length; i++) {
        images[i].style.display = i === index ? 'block' : 'none';
      }
    }
  
    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }
  
    // Inicializa o slideshow
    showImage(currentIndex);
  
    // Configura um intervalo para trocar as imagens
    setInterval(nextImage, intervalDuration);
  });
  