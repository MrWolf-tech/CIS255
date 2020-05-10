//name id = Name
//age id = Age

//radio list
//gender id = gender
    //gender class = Gender
    //name = BG


function BOYGIRL(){
    var name = document.getElementById("Name").value;
    var age = document.getElementById("Age").value;

        var MF = document.getElementsByName("BG");
        for(i=0; i < MF.length; i++){
            if(MF[i].checked){
                document.getElementById("boygirl").innerHTML = MF[i].value;
            } 
            var gen = document.getElementById("boygirl").innerHTML;
        }


        var candrink = "You are also older than 21, which means its time to party and have a few drinks! Please drink responsibly.";
        var cantDrink = "Sorry you are not able to drink yet, just wait a little longer sport."
    
    if(gen == "Male"){
        if(age <= 18){
            var bg = ", currently you are a boy.";
            document.getElementById("boygirl").innerHTML = name + bg;
            if(age >= 21){
                document.getElementById("canDrink").innerHTML = candrink;
            }
            else{
                document.getElementById("canDrink").innerHTML = cantDrink;
            } 
        }
        else if(age > 18){
            var bg = ", currently you are a man.";
            document.getElementById("boygirl").innerHTML = name + bg;
            if(age >= 21){
                document.getElementById("canDrink").innerHTML = candrink;
            }
            else{
                document.getElementById("canDrink").innerHTML = cantDrink;
            } 
        }
    }
    else if(gen == "Female"){
        if(age <= 18){
            var bg = ", currently you are a girl.";
            document.getElementById("boygirl").innerHTML = name + bg;
            if(age >= 21){
                document.getElementById("canDrink").innerHTML = candrink;
            }
            else{
                document.getElementById("canDrink").innerHTML = cantDrink;
            }
        }
        else if(age > 18){
            var bg = ", currently you are a woman.";
            document.getElementById("boygirl").innerHTML = name + bg;
            if(age >= 21){
                document.getElementById("canDrink").innerHTML = candrink;
            }
            else{
                document.getElementById("canDrink").innerHTML = cantDrink;
            } 
        }
    }

}