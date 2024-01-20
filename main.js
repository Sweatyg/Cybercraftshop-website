window.addEventListener(("scroll"),()=>{
    document.querySelector("#Home h1").style.marginTop = `${window.scrollY * 1.5}px`
    document.querySelector("#Mountain1").style.marginBottom = `${106 - window.scrollY}px`
    document.querySelector("#leftCloud").style.marginLeft = `-${window.scrollY}px`
    document.querySelector("#mainCloud").style.marginTop = `-${window.scrollY}px`
    document.querySelector("#rightCloud").style.marginRight = `-${window.scrollY}px`
})

document.addEventListener("DOMContentLoaded", function () {
    var aboutSection = document.getElementById("About");
    var aboutNavLink = document.querySelector('a[href="#About"]');
  
    aboutNavLink.addEventListener("click", function (event) {
      event.preventDefault();
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest", speed: "slow" });
    });
});
  
  