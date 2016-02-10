
function cameraSuccess(imageData) {
  var image = document.getElementById('picture');
  image.src = "data:image/jpeg;base64," + imageData;
}

function cameraError() {
  alert("No se pudo guardar la imagen");
}

function getPicture() {

  cameraOptions = {
    destinationType: Camera.DestinationType.DATA_URL
  }

  navigator.camera.getPicture(cameraSuccess, cameraError, cameraOptions);
}
