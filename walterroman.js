var navArray = ["About","Resume","Contact"];

var navMouseOver = function(hover, text) {
	navHover = document.getElementById(hover);
	navText = document.getElementById(text);

	navText.className = "navTextHovered";
}

var navOnClick = function(exception) {
	navAbout = document.getElementById("About");
	navResume = document.getElementById("Resume");
	navContact = document.getElementById("Contact");

	navTabArray = [navAbout, navResume, navContact];
	
	if (exception == "About") {
		navAbout.className = "aboutClick";
		navAbout.style.marginTop = "-60px";
		navAbout.style.zIndex = "99";
		document.getElementById("navText1").style.marginTop = "104px";
		document.getElementById("firstLetterA").style.marginTop = "63px";


		for (i=0;i<navTabArray.length;i++) {
			if (navTabArray[i].id != exception) {
				navResume.className = "navCircle";
				navResume.style.marginTop = "130px";
				navResume.style.zIndex = "100";
				document.getElementById("navText2").className = "navText";
				document.getElementById("navText2").style.marginTop = "52px";
				document.getElementById("firstLetterR").style.marginTop = "3px";
				navContact.className = "navCircle";	
				navContact.style.marginTop = "260px";
				navContact.style.zIndex = "100";
				document.getElementById("navText3").className = "navText";
				document.getElementById("navText3").style.marginTop = "52px";
				document.getElementById("firstLetterC").style.marginTop = "3px";
			}
		}
	}

	if (exception == "Resume") {
		navResume.className = "resumeClick"
		navResume.style.marginTop = "50px";
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
				document.getElementById("navText1").style.marginTop = "52px";
				document.getElementById("firstLetterA").style.marginTop = "3px";
				navContact.className = "navCircle"	;
				navContact.style.marginTop = "260px";
				navContact.style.zIndex = "100";
				document.getElementById("navText3").className = "navText";
				document.getElementById("navText3").style.marginTop = "52px";
				document.getElementById("firstLetterC").style.marginTop = "3px";
			}
		}
	}

	if (exception == "Contact") {
		navContact.className = "contactClick";
		navContact.style.marginTop = "170px";
		navContact.style.zIndex = "99"
		document.getElementById("navText3").className = "navTextSelected";
		document.getElementById("navText3").style.marginTop = "136px";
		document.getElementById("firstLetterC").style.marginTop = "93px";

		for (i=0;i<navTabArray.length;i++) {
			if (navTabArray[i].id != exception) {
				navAbout.className = "navCircle";
				navAbout.style.marginTop = "0px";
				navAbout.style.zIndex = "100";
				document.getElementById("navText1").className = "navText";
				document.getElementById("navText1").style.marginTop = "52px";
				document.getElementById("firstLetterA").style.marginTop = "3px";
				navResume.className = "navCircle";	
				navResume.style.marginTop = "130px";
				navResume.style.zIndex = "100";
				document.getElementById("navText2").className = "navText";
				document.getElementById("navText2").style.marginTop = "52px";
				document.getElementById("firstLetterR").style.marginTop = "3px";
			}
		}
	}
}

var aboutClick = function() {
	document.getElementById("intro").style.opacity = "0"
	document.getElementById("intro").style.visibility = "hidden"


	document.getElementById("aspire").style.marginTop = "-140px";
	
	document.getElementById("aboutPage").style.visibility = "visible";
	document.getElementById("aboutPage").style.opacity = "1";
	document.getElementById("aboutPage").style.marginTop = "10px";
	document.getElementById("aboutPage").style.height = "550px";

	document.getElementById("contactPage").style.visibility = "hidden";
	document.getElementById("contactPage").style.opacity = "0";
	document.getElementById("contactPage").style.marginTop = "30px";

}

var contactClick = function() {
	document.getElementById("intro").style.opacity = "0"
	document.getElementById("intro").style.visibility = "hidden"


	document.getElementById("aspire").style.marginTop = "-140px";
	
	document.getElementById("contactPage").style.visibility = "visible";
	document.getElementById("contactPage").style.opacity = "1";
	document.getElementById("contactPage").style.marginTop = "10px";

	document.getElementById("aboutPage").style.visibility = "hidden";
	document.getElementById("aboutPage").style.opacity = "0";
	document.getElementById("aboutPage").style.marginTop = "30px";
	document.getElementById("aboutPage").style.height = "260px";

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
		triangle1.className = "triangleHover";
	}

	if (exception == "toolTip2") {
		toolTip2.className = "toolTipHover";
		triangle2.className = "triangleHover";
	}

	if (exception == "toolTip3") {
		toolTip3.className = "toolTipHover";
		triangle3.className = "triangleHover";
	}
}

var toolTipMouseOut = function(exception) {
	toolTip1 = document.getElementById("toolTip1");
	toolTip2 = document.getElementById("toolTip2");
	toolTip3 = document.getElementById("toolTip3");

	triangle1 = document.getElementById("triangle1");
	triangle2 = document.getElementById("triangle2");
	triangle3 = document.getElementById("triangle3");

	if (exception == "toolTip1") {
		toolTip1.className = "toolTip";
		triangle1.className = "triangle-isosceles";
	}

	if (exception == "toolTip2") {
		toolTip2.className = "toolTip";
		triangle2.className = "triangle-isosceles";
	}

	if (exception == "toolTip3") {
		toolTip3.className = "toolTip";
		triangle3.className = "triangle-isosceles";
	}
}