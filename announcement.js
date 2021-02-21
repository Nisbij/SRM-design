function changeTab(evt, tabName) {
    var i, tabContent, L;

    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }

    L = document.getElementsByClassName("tabLinks");
    for (i = 0; i < L.length; i++) {
      L[i].className = L[i].className.replace(" active", "");
    }
    
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  // Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();