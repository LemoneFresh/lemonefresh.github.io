function fadeIn() {
  var element = document.getElementById("text");
  var opacity = 0;
  element.style.display = "block";
  var timer = setInterval(function() {
    if (opacity >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = opacity;
    opacity += 0.1;
  }, 100);
}

function fadeOut() {
  var element = document.getElementById("text");
  var opacity = 1;
  var timer = setInterval(function() {
    if (opacity <= 0) {
      clearInterval(timer);
      element.style.display = "none";
    }
    element.style.opacity = opacity;
    opacity -= 0.1;
  }, 50);
}

setInterval(function() {
  fadeIn();
  setTimeout(fadeOut, 2000);
}, 2000);

function redirect() {
  // Redirect to new page
  window.location.assign('timeline.html');
}