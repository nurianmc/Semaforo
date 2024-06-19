

document.getElementById('red').onclick = illuminateRed;
document.getElementById('yellow').onclick = illuminateYellow;
document.getElementById('green').onclick = illuminateGreen;
  
  function illuminateRed(){
    clearLights();
    document.getElementById('stop').style.backgroundColor = "red";
  }

  function illuminateYellow() {
    clearLights();
    document.getElementById('slow').style.backgroundColor = "yellow";
  }

  function illuminateGreen() {
    clearLights();
    document.getElementById('go').style.backgroundColor = "green";
  }

function clearLights(){
    document.getElementById(`stop`).style.backgroundColor = "black";
    document.getElementById(`slow`).style.backgroundColor = "black";
    document.getElementById(`go`).style.backgroundColor = "black";
};