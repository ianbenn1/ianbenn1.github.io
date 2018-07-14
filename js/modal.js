$( document ).ready(function() {
	var showMeOff = document.getElementById('cookiemodal');

	var span = document.getElementsByClassName("close")[0];



span.onclick = function() {
                showMeOff.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == showMeOff) {
                showMeOff.style.display = "none";
    }
}

});