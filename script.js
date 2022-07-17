(function() {
  window.addEventListener("load", init);
  window.addEventListener("scroll", reveal)
  let imagesFound = true;

  function init() {
    let celebButton = qs('.hiddenbtn');
    celebButton.addEventListener("click", cb);
    let images = id('remove-images');
    images.addEventListener("click", removeImages);
    let partyButton = qs('#partymode');
    partyButton.addEventListener("click", party);
    let shinyButton = qs('#vacationmode');
    shinyButton.addEventListener("mouseover", shinyTime);
  }

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

})();