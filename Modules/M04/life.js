//name id = Name
//age id = Age
//position in life id = Place


function LIFE(){
    var name = document.getElementById("Name").value;
    var age = document.getElementById("Age").value;

    if(age < 1){
        var baby = ", your position in life is currently being a cute and innocent baby!";
        document.getElementById("Place").innerHTML = name + baby;
    }
    else if(age >= 1 && age < 10){
        var kid = ", your position in life is currently being a hyper and energetic kid!";
        document.getElementById("Place").innerHTML = name + kid;
    }
    else if(age >= 10 && age < 13){
        var tween = ", your position in life is currently being a really annoying tween!";
        document.getElementById("Place").innerHTML = name + tween;
    }
    else if(age >= 13 && age < 19){
        var teen = ", your position in life is currently being a brat teenager!";
        document.getElementById("Place").innerHTML = name + teen;
    }
    else if(age >= 20 && age < 30){
        var ya = ", your position in life is currently being a hyper productive young adult!";
        document.getElementById("Place").innerHTML = name + ya;
    }
    else if(age >= 30 && age < 55){
        var adult = ", your position in life is currently being a well off Adult living life to its fullest!";
        document.getElementById("Place").innerHTML = name + adult;
    }
    else if(age >= 55){
        var senior = ", your position in life can be in a multitude of different places right now Senior.  But, the best part is telling your best experiences in life to your Grandchildren.";
        document.getElementById("Place").innerHTML = name + senior;
    }

}
