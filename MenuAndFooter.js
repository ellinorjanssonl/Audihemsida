document.addEventListener("DOMContentLoaded", function () {
  var menuXhr = new XMLHttpRequest();
  var footerXhr = new XMLHttpRequest();
  
  /* Måste öppnas med live-server */
  /* Laddar nav-menyn */
  menuXhr.open("GET", "menu.html", true);

  menuXhr.onload = function () {
    if (menuXhr.status === 200) {
      var menuContainer = document.getElementById("navbar-container");
      menuContainer.innerHTML = menuXhr.responseText;
    }
  };

  menuXhr.send();

  /* Laddar footern */
  footerXhr.open("GET", "footer.html", true);

  footerXhr.onload = function () {
    if (footerXhr.status === 200) {
      var footerContainer = document.getElementById("footer-container");
      footerContainer.innerHTML = footerXhr.responseText;
    }
  };

  footerXhr.send();
  
});

