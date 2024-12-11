function alku(){
	for(var i=0; i<document.getElementsByClassName("dropdown").length; i++){
		document.getElementsByClassName("dropdown")[i].style.left=100/document.getElementsByClassName("dropdown").length*i+"%";
		document.getElementsByClassName("dropdown")[i].style.top=0+"px";
		middlehandfinger(i);
	}
	window.onclick = function(event) {
	  if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		for (var i = 0; i < dropdowns.length; i++) {
		  var openDropdown = dropdowns[i];
		  if (openDropdown.classList.contains('show')) {
			openDropdown.classList.remove('show');
		  }
		}
	  }
	}
}
function middlehandfinger(i){
	document.getElementsByClassName("dropdown")[i].addEventListener("click", function(){myFunction(i);});
}
function myFunction(i) {
	document.getElementsByClassName("dropdown-content")[i].classList.toggle("show");
}