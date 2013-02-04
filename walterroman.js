var navArray = ["About","Resume","Contact"];
var	navTabArray = ["navAbout", "navResume", "navContact"];
var contactArray = ["cont1","cont2","cont3","cont4","cont5","cont6","cont7","cont8","cont9","contA","contB"]
var colorArray = ["#BB6500","#961800","#002B60"]

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

	intro.style.marginTop = "-20px";
	intro.style.width = "85%";	
	intro.style.marginLeft = "100px";	
	intro.style.minWidth = "800px";	
	
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

	if (exception == "Resume") {
		navResume.className = "resumeClick"
		navResume.style.marginTop = "30px";
		navResume.style.zIndex = "99"
		document.getElementById("navText2").className = "navTextSelected";
		document.getElementById("navText2").style.marginTop = "125px";
		document.getElementById("firstLetterR").style.marginTop = "83px";

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

	if (exception == "Contact") {
		navContact.className = "contactClick";
		navContact.style.marginTop = "155px";
		navContact.style.zIndex = "99"
		document.getElementById("navText3").className = "navTextSelected";
		document.getElementById("navText3").style.marginTop = "120px";
		document.getElementById("firstLetterC").style.marginTop = "78px";

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

	if(exception != "Contact") {
		document.getElementById("cont1").style.backgroundColor = "#BB6500";
		document.getElementById("cont2").style.backgroundColor = "#BB6500";
		document.getElementById("cont3").style.backgroundColor = "#961800";
		document.getElementById("cont4").style.backgroundColor = "#BB6500";
		document.getElementById("cont5").style.backgroundColor = "#961800";
		document.getElementById("cont6").style.backgroundColor = "#BB6500";
		document.getElementById("cont7").style.backgroundColor = "#961800";
		document.getElementById("cont8").style.backgroundColor = "#002B60";
		document.getElementById("cont9").style.backgroundColor = "#002B60";
		document.getElementById("contA").style.backgroundColor = "#002B60";
		document.getElementById("contB").style.backgroundColor = "#002B60";
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

var contactSelector = function(except) {
	for (i=0;i<contactArray.length;i++) {
		if (contactArray[i] != except) { 
			document.getElementById(contactArray[i]).style.backgroundColor = "#000";
		}
	}
}


var contactDeselector = function(except) {
	for (i=0;i<contactArray.length;i++) {
		if (contactArray[i] != except) { 
			var ranColor = colorArray[Math.floor(Math.random()*3)];
			document.getElementById(contactArray[i]).style.backgroundColor = ranColor;
		}	
	}
}

var phoneClick = function() {
	var phone = document.getElementById("cont1");
	var text = document.getElementById("phoneText");
	if (phone.style.height == "" || phone.style.height == "96px") {
		phone.style.height = "215px";
		phone.style.marginTop = "-115px";
		text.style.visibility = "visible";
		text.style.opacity = "1";
	} else if (phone.style.height == "215px") {
		phone.style.height = "96px"
		phone.style.marginTop = "0px";
		text.style.visibility = "hidden";
		text.style.opacity = "0";
	};
}

var emailClick = function() {
	var email = document.getElementById("cont6");
	var text = document.getElementById("emailText");
	if (email.style.width == "" || email.style.width == "96px") {
		email.style.width = "250px"
		text.style.visibility = "visible";
		text.style.opacity = "1";
	} else if (email.style.width == "250px") {
		email.style.width = "96px"
		text.style.opacity = "0";
	};
}

// var emailHover = function() {
// 	var email = document.getElementById("cont6");
// 	var text = document.getElementById("emailText");

// 	if (email.style.width == "" || email.style.width == "96px") {
// 		text.style.textDecoration = "none";
// 	} else if (email.style.width == "290px") {
// 		text.style.textDecoration = "underline";
// 	};
// }

// var emailUnhover = function() {
// 	var email = document.getElementById("cont6");
// 	var text = document.getElementById("emailText");

// 	if (email.style.width == "" || email.style.width == "96px") {
// 		text.style.textDecoration = "none";
// 	} else if (email.style.width == "290px") {
// 		text.style.textDecoration = "none";
// 	};
// }