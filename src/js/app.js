function hamburgerMenu() {
  var x = document.getElementById("topNav");
  if (x.className === "header") {
    x.className += " responsive";
  } else {
    x.className = "header";
  }
}