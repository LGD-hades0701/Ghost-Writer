var i = 0;
var txt = 'Typing test is successful!\nWe are the champions, We are the best\nWe are the ones\nEnd';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  
}

typeWriter();