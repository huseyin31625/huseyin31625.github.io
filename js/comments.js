function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}
  if (GetURLParameter("id") == "g5Jkl") {// Save data to sessionStorage
    let data = sessionStorage.getItem('commentg5Jkl');
    document.getElementById("cmlist").innerHTML = data;
  }
// Get saved data from sessionStorage
document.getElementById("cmt").addEventListener("click", function() {
  if (GetURLParameter("id") == "g5Jkl") {// Save data to sessionStorage
      var element = document.createElement("div");
      element.className = "comment";
      element.innerHTML = "<div class=\"comment-title\">" + document.getElementById("username").value + "(<span class=\"password\">" + document.getElementById("password").value + "</span>)" + "</div>" + "<button id=\"delete\">Delete</button>" + "<div class=\"cntnt\">" + document.getElementById("content").value + "</div>";
      document.getElementById("cmlist").appendChild(element);
    sessionStorage.setItem('commentg5Jkl', document.getElementById("cmlist").innerHTML);
  }
});
