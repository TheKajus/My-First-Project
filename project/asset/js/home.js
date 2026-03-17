'use strict'
var time;
function setTime(){
  time = setTimeout(showPage, 2500);
}
function showPage() {
  document.getElementById("loader-warpper").style.display = "none";
  document.getElementById("header").style.display = "block";
}

// count for blog