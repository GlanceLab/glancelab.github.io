function hamburgerMenu() {
    var x = document.getElementById("topNav");
    console.log(x)
    if (x.className === "header") {
      x.className += " responsive";
    } else {
      x.className = "header";
    }
  }