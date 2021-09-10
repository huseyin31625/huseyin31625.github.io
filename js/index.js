var video = document.querySelector("#cameraElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(function (stream) {
      video.srcObject = stream;
      document.getElementById("download").href = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}
