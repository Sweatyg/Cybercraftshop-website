function flipImage(element) {
  element.querySelector('.front-image').style.transform = 'rotateY(-180deg)';
  element.querySelector('.back-image').style.transform = 'rotateY(0deg)';
}

function unflipImage(element) {
  element.querySelector('.front-image').style.transform = 'rotateY(0deg)';
  element.querySelector('.back-image').style.transform = 'rotateY(180deg)';
}

function openEtsyLink(element) {
  var etsyLink = element.getAttribute('data-etsy-link');
  window.open(etsyLink, "_blank");
}

window.addEventListener(("scroll"),()=>{
  document.querySelector("#Home h1").style.marginTop = `${window.scrollY * 1.5}px`
  document.querySelector("#Mountain1").style.marginBottom = `${106 - window.scrollY}px`
  document.querySelector("#leftCloud").style.marginLeft = `-${window.scrollY}px`
  document.querySelector("#mainCloud").style.marginTop = `-${window.scrollY}px`
  document.querySelector("#rightCloud").style.marginRight = `-${window.scrollY}px`
})

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.img-content').forEach(function(element) {
      element.addEventListener("mouseover", function() {
          flipImage(this);
      });

      element.addEventListener("mouseout", function() {
          unflipImage(this);
      });

      element.addEventListener("click", function() {
          openEtsyLink(this);
      });
  });
});

