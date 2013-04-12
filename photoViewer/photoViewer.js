var close = function() {
	console.log('asdfdsfd')
}

var toggleOn = function(toToggle) {
	var ele = document.getElementById(toToggle);
	ele.style.opacity = "1";
	ele.style.visibility = "visible";
	console.log('toggleOn');
}

var toggleOff = function(toToggle) {
	var ele = document.getElementById(toToggle);
	ele.style.opacity = "0";
	ele.style.visibility = "hidden";
	console.log('toggleOff');

}

var toggling = function(toggle) {
	var ele = document.getElementById(toggle);
	console.log(ele.style.zIndex, 'sdfgf');
}