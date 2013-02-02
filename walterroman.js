var navArray = ["About","Resume","Contact"];

var navMouseOver = function(hover, text) {
	navHover = document.getElementById(hover);
	navText = document.getElementById(text);

	navText.className = "navTextHovered";
}

// Nav Tab Selector 103px

var navOnClick = function(exception) {
	navAbout = document.getElementById("About");
	navResume = document.getElementById("Resume");
	navContact = document.getElementById("Contact");
	intro = document.getElementById("intro");
	aspire = document.getElementById("aspire");
	navBar = document.getElementById("navBar");

	musician = document.getElementById("musician");
	developer = document.getElementById("developer");
	human = document.getElementById("human");

	navTabArray = [navAbout, navResume, navContact];

	intro.style.marginTop = "-20px";
	intro.style.width = "85%";	
	intro.style.marginLeft = "100px";	
	
	aspire.style.marginTop = "110px";
	aspire.style.width = "85%";	
	aspire.style.marginLeft = "100px";	
	aspire.style.minWidth = "800px";	

	navBar.style.paddingLeft = "5%";
	navBar.style.marginLeft = "-50px";

	document.getElementById("*1").className = "asteriskVis";
	document.getElementById("*2").className = "asteriskVis";
	document.getElementById("*3").className = "asteriskVis";

	musician.className = "aspireLinkInvert";
	developer.className = "aspireLinkInvert";
	human.className = "aspireLinkInvert";

	if (exception == "About") {
		navAbout.className = "aboutClick";
		navAbout.style.marginTop = "-70px";
		navAbout.style.zIndex = "99";
		document.getElementById("navText1").className = "navTextSelected";
		document.getElementById("navText1").style.marginTop = "115px";
		document.getElementById("firstLetterA").style.marginTop = "73px";

		document.getElementById("navText1").style.marginLeft = "95px";
		document.getElementById("firstLetterA").style.marginLeft = "43px";

		for (i=0;i<navTabArray.length;i++) {
			if (navTabArray[i].id != exception) {
				navResume.className = "navCircle";
				navResume.style.marginTop = "110px";
				navResume.style.zIndex = "100";
				document.getElementById("navText2").className = "navText";
				document.getElementById("navText2").style.marginTop = "49px";
				document.getElementById("firstLetterR").style.marginTop = "3px";
				navContact.className = "navCircle";	
				navContact.style.marginTop = "220px";
				navContact.style.zIndex = "100";
				document.getElementById("navText3").className = "navText";
				document.getElementById("navText3").style.marginTop = "49px";
				document.getElementById("firstLetterC").style.marginTop = "3px";
			}
		}
	}

	if (exception == "Resume") {
		navResume.className = "resumeClick"
		navResume.style.marginTop = "30px";
		navResume.style.zIndex = "99"
		document.getElementById("navText2").className = "navTextSelected";
		document.getElementById("navText2").style.marginTop = "125px";
		document.getElementById("firstLetterR").style.marginTop = "83px";

		for (i=0;i<navTabArray.length;i++) {
			if (navTabArray[i].id != exception) {
				navAbout.className = "navCircle";
				navAbout.style.marginTop = "0px";
				navAbout.style.zIndex = "100";
				document.getElementById("navText1").className = "navText"
				document.getElementById("navText1").style.marginTop = "49px";
				document.getElementById("firstLetterA").style.marginTop = "3px";
				navContact.className = "navCircle"	;
				navContact.style.marginTop = "220px";
				navContact.style.zIndex = "100";
				document.getElementById("navText3").className = "navText";
				document.getElementById("navText3").style.marginTop = "49px";
				document.getElementById("firstLetterC").style.marginTop = "3px";
			}
		}
	}

	if (exception == "Contact") {
		navContact.className = "contactClick";
		navContact.style.marginTop = "155px";
		navContact.style.zIndex = "99"
		document.getElementById("navText3").className = "navTextSelected";
		document.getElementById("navText3").style.marginTop = "120px";
		document.getElementById("firstLetterC").style.marginTop = "78px";

		for (i=0;i<navTabArray.length;i++) {
			if (navTabArray[i].id != exception) {
				navAbout.className = "navCircle";
				navAbout.style.marginTop = "0px";
				navAbout.style.zIndex = "100";
				document.getElementById("navText1").className = "navText";
				document.getElementById("navText1").style.marginTop = "49px";
				document.getElementById("firstLetterA").style.marginTop = "3px";
				navResume.className = "navCircle";	
				navResume.style.marginTop = "110px";
				navResume.style.zIndex = "100";
				document.getElementById("navText2").className = "navText";
				document.getElementById("navText2").style.marginTop = "49px";
				document.getElementById("firstLetterR").style.marginTop = "3px";
			}
		}
	}
}

var aboutClick = function() {
	// document.getElementById("intro").className = "introInvis"	
	document.getElementById("aboutPage").className = "pageVis";

	document.getElementById("contactPage").className = "pageInvis";
	document.getElementById("resumePage").className = "pageInvis";
}

var resumeClick = function() {
	// document.getElementById("intro").className = "introInvis"	
	document.getElementById("resumePage").className = "pageVis";

	document.getElementById("contactPage").className = "pageInvis";
	document.getElementById("aboutPage").className = "pageInvis";

}

var contactClick = function() {
	// document.getElementById("intro").className = "introInvis";	
	document.getElementById("contactPage").className = "pageVis";

	document.getElementById("aboutPage").className = "pageInvis";
	document.getElementById("resumePage").className = "pageInvis";
}

var toolTip = function(exception) {
	toolTip1 = document.getElementById("toolTip1");
	toolTip2 = document.getElementById("toolTip2");
	toolTip3 = document.getElementById("toolTip3");

	triangle1 = document.getElementById("triangle1");
	triangle2 = document.getElementById("triangle2");
	triangle3 = document.getElementById("triangle3");

	if (exception == "toolTip1") {
		toolTip1.className = "toolTipHover";
	}

	if (exception == "toolTip2") {
		toolTip2.className = "toolTipHover";
	}

	if (exception == "toolTip3") {
		toolTip3.className = "toolTipHover";
	}
}

var toolTipMouseOut = function(exception) {
	toolTip1 = document.getElementById("toolTip1");
	toolTip2 = document.getElementById("toolTip2");
	toolTip3 = document.getElementById("toolTip3");

	if (exception == "toolTip1") {
		toolTip1.className = "toolTip";
	};

	if (exception == "toolTip2") {
		toolTip2.className = "toolTip";
	};

	if (exception == "toolTip3") {
		toolTip3.className = "toolTip";
	};
};

var pageScroll = function() {
	var walt = Math.ceil(pageYOffset / 10);

	if (pageYOffset == 0) {
		return    
	} else if (pageYOffset != 0) {
    	window.scrollBy(0,(-walt)); // horizontal and vertical scroll increments
    	var scrollDelay = setTimeout('pageScroll()',10); // scrolls every 100 milliseconds
    };	
    console.log(walt);
};

// var scrollButton = function() {
// 	document.getElementById("toTop").style.marginTop = Math.floor(window.innerHeight * .7) + "px";
// 	console.log(window.innerHeight)
// }
 
var scroll = function() {
	scroller = document.getElementById("toTop");

	var displacement =  document.body.scrollTop;
	if (displacement < 600) {
		scroller.style.opacity = "0";
	}

	if (displacement >= 600 && displacement < 800) {
		scroller.style.opacity = "0.1";
	}

	if (displacement >= 800 && displacement < 1000) {
		scroller.style.opacity = "0.2";
	}

	if (displacement >= 1000 && displacement < 1200) {
		scroller.style.opacity = "0.3";
	}
	
	if (displacement >= 1200 && displacement < 1400) {
		scroller.style.opacity = "0.4";
	}

	if (displacement >= 1400 && displacement < 1600) {
		scroller.style.opacity = "0.5";
	}

	if (displacement >= 1600) {
		scroller.style.opacity = "0.6";
	}
};

var scrollIconVis = function () {
	document.getElementById("toTop").style.opacity = "1";
}

window.onscroll = scroll;