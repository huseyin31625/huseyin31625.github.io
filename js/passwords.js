document.getElementById("create").addEventListener("click", function() {
  var element = document.createElement("div");
  element.className = "password";
  element.innerHTML = document.getElementById("password").value;
  document.getElementById("passwds").appendChild(element);
  sessionStorage.setItem("passwords", element.innerHTML);
  sessionStorage.save();
});
