
function cameraSuccess() {

}

function cameraError() {

}

function getPicture() {


  alert("coucou")

  cameraOptions = {
  }

  navigator.camera.getPicture(cameraSuccess, cameraError, cameraOptions);
}
