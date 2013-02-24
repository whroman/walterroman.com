var navScroll = function(section) {
	var gradual = (Math.ceil(section/50) - Math.ceil(pageYOffset/100));
	if (pageYOffset >= section) {
		return    
	} else if (pageYOffset <= section) {
    	window.scrollBy(0,gradual);
    	var scrollDelay = setTimeout('navScroll('+section+')',4);
    };	
}

var pageScroll = function() {
	var walt = Math.ceil(pageYOffset / 10);

	if (pageYOffset == 0) {
		return    
	} else if (pageYOffset != 0) {
    	window.scrollBy(0,(-walt));
    	var scrollDelay = setTimeout('pageScroll()',10);
    };	
};
 
var scroll = function() {
	scroller = document.getElementById("toTop");

	var displacement =  document.body.scrollTop;
	
	if (displacement < 600) {
		scroller.style.opacity = "0";
		scroller.style.visibility = "hidden"
	}


	if ( displacement > 600) {
		scroller.style.opacity = (displacement  / 2000)
		scroller.style.visibility = "visible"
	}
};

var scrollIconVis = function () {
	document.getElementById("toTop").style.opacity = "1";
}

window.onscroll = scroll;