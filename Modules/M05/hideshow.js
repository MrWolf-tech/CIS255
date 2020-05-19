

function hs1(){
if(document.getElementById("para1").innerHTML === "Four score and seven years ago our fathers brought")
   {
   document.getElementById("para1").innerHTML = "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.";
   }
   else if(document.getElementById("para1").innerHTML === "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.")
   {
   document.getElementById("para1").innerHTML = "Four score and seven years ago our fathers brought";
   }
}

function hs2(){

var x = document.getElementById("Para2");
var y = document.getElementById("FirstLook");
if(x.style.display == "none"){
    x.style.display = "block";
    y.style.display = "none";
}
else{
    x.style.display = "none";
    y.style.display = "block";
}
}


function hs3(){
    if(document.getElementById("para3").innerHTML === "But, in a larger sense, we can not dedicate we")
    {
    document.getElementById("para3").innerHTML = "But, in a larger sense, we can not dedicate we can not consecrate—we can not hallow—this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us—that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion—that we here highly resolve that these dead shall not have died in vain—that this nation, under God, shall have a new birth of freedom—and that government of the people, by the people, for the people, shall not perish from the earth.";
    }
    else if(document.getElementById("para3").innerHTML === "But, in a larger sense, we can not dedicate we can not consecrate—we can not hallow—this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us—that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion—that we here highly resolve that these dead shall not have died in vain—that this nation, under God, shall have a new birth of freedom—and that government of the people, by the people, for the people, shall not perish from the earth.")
    {
    document.getElementById("para3").innerHTML = "But, in a larger sense, we can not dedicate we";
    }
}

 
