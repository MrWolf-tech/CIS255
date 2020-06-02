
var url = window.location.href;
var getParams = function (url) {
	var params = {};
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
	}
	return params;
};

var urlinfo = getParams(url)

for (let key in urlinfo) { 
    if (urlinfo.hasOwnProperty(key)) 
    { 
        value = urlinfo[key]; 
        thevalue(value, key);
    } 
} 


function thevalue(item, index) {
	document.getElementById("info").innerHTML += index + ": " + item + "<br>"; 
	
}


function hide_order(){
	order.style.display="none";
	rec.style.display="none";
}



function recipe(){
	rec.style.display="block";
	let n = document.getElementById("order").innerHTML;
	if(n.includes("Small") && n.includes("Pepperoni")){
		document.getElementById("rec").innerHTML = "This is a Small Pizza with Pepperoni as its main course";
	}
	else if(n.includes("Small") && n.includes("Sausage")){
		document.getElementById("rec").innerHTML = "This is a Small Pizza with Sausage as its main course";
	}
	else if(n.includes("Small") && n.includes("Canadian+Bacon")){
		document.getElementById("rec").innerHTML = "This is a Small Pizza with Canadian Bacon as its main course";
	}
	else if(n.includes("Small") && n.includes("Ground+Beef")){
		document.getElementById("rec").innerHTML = "This is a Small Pizza with Ground Beef as its main course";
	}

	if(n.includes("Medium") && n.includes("Pepperoni")){
		document.getElementById("rec").innerHTML = "This is a Medium Pizza with Pepperoni as its main course";
	}
	else if(n.includes("Medium") && n.includes("Sausage")){
		document.getElementById("rec").innerHTML = "This is a Medium Pizza with Sausage as its main course";
	}
	else if(n.includes("Medium") && n.includes("Canadian+Bacon")){
		document.getElementById("rec").innerHTML = "This is a Medium Pizza with Canadian Bacon as its main course";
	}
	else if(n.includes("Medium") && n.includes("Ground+Beef")){
		document.getElementById("rec").innerHTML = "This is a Medium Pizza with Ground Beef as its main course";
	}

	if(n.includes("Large") && n.includes("Pepperoni")){
		document.getElementById("rec").innerHTML = "This is a Large Pizza with Pepperoni as its main course";
	}
	else if(n.includes("Large") && n.includes("Sausage")){
		document.getElementById("rec").innerHTML = "This is a Large Pizza with Sausage as its main course";
	}
	else if(n.includes("Large") && n.includes("Canadian+Bacon")){
		document.getElementById("rec").innerHTML = "This is a Large Pizza with Canadian Bacon as its main course";
	}
	else if(n.includes("Large") && n.includes("Ground+Beef")){
		document.getElementById("rec").innerHTML = "This is a Large Pizza with Ground Beef as its main course";
	}

}










   

      
