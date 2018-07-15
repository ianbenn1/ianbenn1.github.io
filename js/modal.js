$( document ).ready(function() {
	var showMeOff = document.getElementById('cookiemodal');

	var span = document.getElementsByClassName("close")[0];

	var showMeOff2 = document.getElementById('sharemodal');

	var span2 = document.getElementsByClassName("close")[1];


span.onclick = function() {
	try{
		showMeOff.style.display = "none";
	}
	catch {
	}

	try{
		 showMeOff2.style.display = "none";
	}
	catch {	
	}                               
}

window.onclick = function(event) {
    if (event.target == showMeOff || event.target == showMeOff2) {

    	try{
    		showMeOff.style.display = "none";
    	}
    	catch{
    	}

    	try{
    		showMeOff2.style.display = "none";
    	}
    	catch{
    	}             
    }
}

});


function openPopup(url) {
       newwindow=window.open(url,'Social Share','height=400,width=750');
       if (window.focus) {newwindow.focus()}
     }