// XMLHttpRequest
function loadjson(file,callback) {
 var xhr = new XMLHttpRequest();
 xhr.overrideMimeType("application/json");
 xhr.open("GET",file,true);
 xhr.onreadystatechange = function(){
  if (xhr.readyState ===4 && xhr.status===200) {
          callback(xhr.responseText);
  }
 }
 xhr.send(); 
}
// passing data and getting response
loadjson("data.json",function(text){
   var d = JSON.parse(text);
   console.log(d);
   basic(d.details);
   friends(d.frnds);
})
var main = document.querySelector(".me-details")
function basic(data){
	var name = document.createElement("h2");
	name.textContent=data.name;
	name.classList.add("name");
	main.appendChild(name);
	var age = document.createElement("p");
	age.textContent=data.age;
	age.classList.add("age");
	main.appendChild(age);	
	var h1 = document.createElement("h1");
	h1.textContent="My Education";
	h1.appendChild(document.createElement("hr"));
	main.appendChild(h1);
	var ul=document.createElement("ul");
	for (var i = 0; i < data.edu.length; i++) {
		var li=document.createElement("li");
		li.textContent= data.edu[i];
		ul.appendChild(li);
	}
	main.appendChild(ul);
	var im = document.createElement("img");
	im.src=data.image;
	main.appendChild(im);
}
function friends(t){
	var h1 = document.createElement("h1");
	h1.textContent="My Friends";
	h1.appendChild(document.createElement("hr"));
	main.appendChild(h1);
	var table = document.createElement("table");
	var row = "";
	for (var i = 0; i < t.length ; i++) { 
		row += "<tr><td>"+t[i].name+"</td><td>"+t[i].place+"</td></tr>";	
	}
	table.innerHTML=row;
	main.appendChild(table);
}