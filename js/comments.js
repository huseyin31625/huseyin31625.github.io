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
// Get saved data from sessionStorage
document.getElementById("writecomment").addEventListener("click", function() {
  if (GetURLParameter("id") == "g5Jkl") {// Save data to sessionStorage
    sessionStorage.setItem('commentg5Jkl', document.getElementById("cmlist").innerHTML);
    let data = sessionStorage.getItem('commentg5Jkl');
  }
});
