if (localStorage.getItem("passwords")) {
  document.getElementById("passwds").innerHTML = localStorage.getItem("passwords");
}
document.getElementById("create").addEventListener("click", function() {
  var element = document.createElement("div");
  element.className = "password";
  element.innerHTML = document.getElementById("password").value;
  document.getElementById("passwds").appendChild(element);
  localStorage.setItem("passwords", document.getElementById("passwds").innerHTML);
});
document.getElementById("show").addEventListener("mousedown", function() {
  document.getElementById("password").type = "text";
});
document.getElementById("show").addEventListener("mouseup", function() {
  document.getElementById("password").type = "password";
});
