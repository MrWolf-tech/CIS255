document.getElementById("C").onmouseover = function(){mouseOverC()};
document.getElementById("O").onmouseover = function(){mouseOverO()};
document.getElementById("L").onmouseover = function(){mouseOverL()};
document.getElementById("O1").onmouseover = function(){mouseOverO1()};
document.getElementById("R").onmouseover = function(){mouseOverR()};
document.getElementById("M").onmouseover = function(){mouseOverM()};
document.getElementById("Y").onmouseover = function(){mouseOverY()};
document.getElementById("W").onmouseover = function(){mouseOverW()};
document.getElementById("O2").onmouseover = function(){mouseOverO2()};
document.getElementById("R1").onmouseover = function(){mouseOverR1()};
document.getElementById("L1").onmouseover = function(){mouseOverL1()};
document.getElementById("D").onmouseover = function(){mouseOverD()};

function mouseOverC(){document.getElementById("C").style.color = RandomColor();}
function mouseOverO(){document.getElementById("O").style.color = RandomColor();}
function mouseOverL(){document.getElementById("L").style.color = RandomColor();}
function mouseOverO1(){document.getElementById("O1").style.color = RandomColor();}
function mouseOverR(){document.getElementById("R").style.color = RandomColor();}
function mouseOverM(){document.getElementById("M").style.color = RandomColor();}
function mouseOverY(){document.getElementById("Y").style.color = RandomColor();}
function mouseOverW(){document.getElementById("W").style.color = RandomColor();}
function mouseOverO2(){document.getElementById("O2").style.color = RandomColor();}
function mouseOverR1(){document.getElementById("R1").style.color = RandomColor();}
function mouseOverL1(){document.getElementById("L1").style.color = RandomColor();}
function mouseOverD(){document.getElementById("D").style.color = RandomColor();}

//This is the random color generator.  I had to do some extra research.
function RandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
function RandomColor1() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
function RandomColor2() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }