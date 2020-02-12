window.openTab = function(evt, tabName) {
  var i, content, tablinks;
  content = document.getElementsByClassName("tab-content");

  // Hide all content
  for (i = 0; i < content.length; i++) {
      content[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab");
  
  // Make all tabs non-active
  for (i = 0; i < content.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("is-active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " is-active";
}

window.openModal = function() {

  modal = this.document.getElementById('timepicker');
  modal.className += ' is-active';
}


window.closeModal = function() {
  modal = this.document.getElementById('timepicker');
  modal.className = modal.className.replace(' is-active',"");
}