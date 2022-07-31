function info(alertInfo) {
  var timeleft = null;
  var dim = document.getElementById("dim");
  var bubble = document.getElementById("alert");
  var alertText = document.getElementById("alert-text");
  alertText.textContent = alertInfo;
  bubble.style.display = "block";
  dim.style.display = "block";
  clearTimeout(timeleft);
  timeleft = setTimeout(function () {
    bubble.style.display = "none";
    dim.style.display = "none";
  }, 1500);
}

function loading(btnId){
 btnId.innerHTML = '<span id="loading"></span>';
 btnId.style = "background-color: #404040;";
 btnId.disabled = true;
}

function unload(btnId, txtCntnt){
 btnId.innerHTML = txtCntnt;
 btnId.style = "background-color: #000000;";
 btnId.disabled = false;
}

function deletebox(){
 let alertbox = document.getElementById("alertbox");
 var dim = document.getElementById("dim");
 
 if(!alertbox.style.display || alertbox.style.display == "none"){
  alertbox.style.display = "flex";
  dim.style.display = "block";
 }
 else{
  alertbox.style.display = "none";
  dim.style.display = "none";
 }
}

function loadUser(){
  var textbox = document.getElementById("message");
  var name = document.getElementById("name");
  var send = document.getElementById("send");

  name.textContent = "Validating Username...";
  name.classList.toggle('validatename');
  send.innerHTML = '<span id="loading"></span>';
  textbox.placeholder = "Please wait while validating user...";
  send.style = "background-color: #404040;";
  send.disabled = true;
  textbox.disabled = true;
}

function unloadUser(){
  var textbox = document.getElementById("message");
  var name = document.getElementById("name");
  var send = document.getElementById("send");

  name.classList.remove('validatename');
  send.innerHTML = "Send message";
  textbox.placeholder = "Enter your message here...";
  send.style = "background-color: #000000;";
  send.disabled = false;
  textbox.disabled = false;
}