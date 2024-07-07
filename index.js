let bgNavbar = document.getElementById("bgNavbar");
let colorText = document.querySelectorAll("ul li a");
// colorText.forEach((item) => {
//   item.style.color = "#ffdb00";
// });

window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 100) {
    bgNavbar.style.backgroundColor = "white";
    bgNavbar.style.boxShadow = "1px 1px 8px black";
    bgNavbar.style.transition = ".5s";
    colorText.forEach((item) => {
      item.style.color = "#ffdb00";
    });
  } else {
    bgNavbar.style.backgroundColor = "";
    bgNavbar.style.boxShadow = "";
    bgNavbar.style.transition = ".5s";
    colorText.forEach((item) => {
      item.style.color = "";
    });
  }
});
