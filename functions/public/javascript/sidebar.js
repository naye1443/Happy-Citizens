function openSidebar(){
  var sidenav = document.getElementsByClassName("sidenav")[0];
  sidenav.style.width = "250px";
  var main = document.getElementById("main");
  main.style.marginLeft = "250px";
}

function closeSidebar(){
  var sidenav = document.getElementsByClassName("sidenav")[0];
  sidenav.style.width = "0";
  var main = document.getElementById("main");
  main.style.marginLeft= "0";
  }