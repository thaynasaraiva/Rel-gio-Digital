function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  
  if (hours < 10) {
    hours = '0' + hours;
  }
  
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  
  var time = hours + ':' + minutes + ':' + seconds;
  
  document.getElementById('clock').innerHTML = time;
}

setInterval(updateClock, 1000);

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowLeft") {
    console.log('Tecla para a esquerda pressionada!');
    document.getElementById("clock").style.color = "red";
    document.getElementById("clock").style.scale = 1.5;
  }
});

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowRight") {
    console.log('Tecla para a direita pressionada!');
    document.getElementById("clock").style.color = "blue";
    document.getElementById("clock").style.scale = 0.5;
  }
});

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowUp") {
    console.log('Tecla para a direita pressionada!');
    document.getElementById("clock").style.color = "rgb(233, 20, 179)";
    document.getElementById("clock").style.scale = 1;
  }
});