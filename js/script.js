console.log(document);
window.onload = function() {
  console.log('The page is fully loaded.');
  // the rest of the script
	var button = document.getElementsByClassName('button');
	for (var i = 0; i < button.length; i++) {
	console.log(button[i].innerText);
	alert(button[i].innerText);
	}
};



