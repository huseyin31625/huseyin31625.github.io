document.getElementById("bold").addEventListener("click", function() {
  var selection = document.getElementById("write-here").value.substring(document.getElementById("write-here").selectionStart, document.getElementById("write-here").selectionEnd);
  var bold = "<b>" + selection + "</b>";
  document.getElementById("write-here").value = document.getElementById("write-here").value.replace(selection, bold);
});
document.getElementById("italic").addEventListener("click", function() {
  var selection = document.getElementById("write-here").value.substring(document.getElementById("write-here").selectionStart, document.getElementById("write-here").selectionEnd);
  var bold = "<i>" + selection + "</i>";
  document.getElementById("write-here").value = document.getElementById("write-here").value.replace(selection, bold);
});
setInterval(function() {
  document.getElementById("preview").innerHTML = document.getElementById("write-here").value;
}, 750);
