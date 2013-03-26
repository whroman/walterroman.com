var	navTabArray = ["navAbout", "navResume", "navContact"];
var contactArray = ["cont1","cont2","cont3","cont4","cont5","cont6","cont7","cont8","cont9"]
var colorArray = ["#BB6500","#961800","#002B60"]

var navMouseOver = function(hover, text) {
	navText = document.getElementById(text);

	navText.className = "navTextHovered";
}

// Nav Tab Selector 103px

var navOnClick = function(exception) {
	navAbout = document.getElementById("About");
	navResume = document.getElementById("Resume");
	navContact = document.getElementById("Contact");

	navTextAbout = document.getElementById('navTextAbout');
	navTextResume = document.getElementById('navTextResume');
	navTextContact = document.getElementById('navTextContact');
 
	navA = document.getElementById('firstLetterA');
	navR = document.getElementById('firstLetterR');
	navC = document.getElementById('firstLetterC');


	document.getElementById("intro").className = "introJS";
	document.getElementById("aspire").className = "aspireJS";
	document.getElementById("navBar").className = "navBarJS";

// Mods Nav Bar text and circles onClick
	if (exception == "About") {
	// About Tab Selected
		navAbout.className = "navCircle aboutClick";
		navTextAbout.className = "navTextSelected";
		navTextAbout.style.marginLeft = "101px";
		navA.style.marginTop = "73px";
		navA.style.marginLeft = "43px";

	// Resume Tab
		navResume.className = "navCircle";
		navTextResume.className = "navText";
		navTextResume.style.marginLeft = "95px";
		navR.style.marginTop = "3px";

	// Contact Tab
		navContact.className = "navCircle";	
		navTextContact.className = "navText";
		navTextContact.style.marginLeft = "96px";
		navC.style.marginTop = "3px";
	}

	if (exception == "Resume") {

	// Resume Tab Selected
		navResume.className = "navCircle resumeClick"
		navTextResume.className = "navTextSelected";
		navTextResume.style.marginLeft = "93px";
		navR.style.marginTop = "83px";

	// About Tab
		navAbout.className = "navCircle";
		navTextAbout.className = "navText"
		navTextAbout.style.marginLeft = "101px";
		navA.style.marginTop = "3px";

	// Contact Tab
		navContact.className = "navCircle"	;
		navTextContact.className = "navText";
		navTextContact.style.marginLeft = "96px";
		navC.style.marginTop = "3px";
	}

	if (exception == "Contact") {

	// Contact Tab Selected
		navContact.className = "navCircle contactClick";
		navTextContact.className = "navTextSelected";
		navTextContact.style.marginLeft = "97px";
		navC.style.marginTop = "88px";

	// About Tab
		navAbout.className = "navCircle";
		navTextAbout.className = "navText";
		navTextAbout.style.marginLeft = "101px";
		navA.style.marginTop = "3px";

	// Resume Tab
		navResume.className = "navCircle";	
		navTextResume.className = "navText";
		navTextResume.style.marginLeft = "95px";
		navR.style.marginTop = "3px";
	}

	if(exception != "Contact") {
		// Set Contact Links as Orange
		document.getElementById("cont1").style.backgroundColor = "#002B60";
		document.getElementById("cont2").style.backgroundColor = "#002B60";
		document.getElementById("cont3").style.backgroundColor = "#002B60";

		// Set Contact Links as Red
		document.getElementById("cont4").style.backgroundColor = "#961800";
		document.getElementById("cont5").style.backgroundColor = "#961800";
		document.getElementById("cont6").style.backgroundColor = "#961800";

		// Set Contact Links as Blue
		document.getElementById("cont7").style.backgroundColor = "#BB6500";
		document.getElementById("cont8").style.backgroundColor = "#BB6500";
		document.getElementById("cont9").style.backgroundColor = "#BB6500";
	}
}


var aboutClick = function() {
	// Page to be selected
	document.getElementById("aboutPage").className = "pageVis";

	// Pages to be deselect
	document.getElementById("contactPage").className = "pageInvis";
	document.getElementById("resumePage").className = "pageInvis";
}

var resumeClick = function() {
	// Page to be selected
	document.getElementById("resumePage").className = "pageVis";

	// Pages to be deselect
	document.getElementById("contactPage").className = "pageInvis";
	document.getElementById("aboutPage").className = "pageInvis";

}

var contactClick = function() {
	// Page to be selected
	document.getElementById("contactPage").className = "pageVis";

	// Pages to be deselect
	document.getElementById("aboutPage").className = "pageInvis";
	document.getElementById("resumePage").className = "pageInvis";
}

// Custom Accordion
var aboutSelector = function(except) {
	var info = document.getElementById(except+"Info");
	var titles = document.getElementById(except+"Titles");
	var about = document.getElementById("aboutPage");

	if (info.style.height == "" || info.style.height == "0px") {
		info.style.visibility = "visible";
		info.style.opacity = "1";
		titles.style.visibility = "visible";
		titles.style.opacity = "1";
			if (except == "personal") {
				info.style.height = "340px";
				titles.style.height = "340px";
			}
			if (except == "art") {
				info.style.height = "670px";
				titles.style.height = "670px";
			}
			if (except == "education") {
				info.style.height = "986px";
				titles.style.height = "986px";
			}
	} else {
		info.style.height = "0px";
		info.style.opacity = "0";
		info.style.visibility = "hidden";

		titles.style.height = "0px";
		titles.style.opacity = "0";
		titles.style.visibility = "hidden";
	}
}

var asteriskClick = function(except) {
	var one = document.getElementById("ast"+except+"1");
	var two = document.getElementById("ast"+except+"2");
// Creates minus sign
	if (one.className == "minus" || one.className == "minus anti45") {
		one.className = "minus selected";
		two.className = "minus";
	} else if (one.className != "minus") {
// Creates plus sign
		one.className = "minus";
		two.className = "minus plus";
	}
}

var asteriskMouseOver = function(except) {
	var one = document.getElementById("ast"+except+"1");
	var two = document.getElementById("ast"+except+"2");
	var head = document.getElementById(except+"Head");

	one.style.backgroundColor = "#000";
	two.style.backgroundColor = "#000";
// Keeps minus sign
	if (one.className == "minus selected") {
		one.className = "minus selected";
		two.className = "minus";
	} else if (one.className == "minus") {
// Keeps plus sign
		one.className = "minus anti45";
		two.className = "minus plus45";
	}

	if (except == 'Pers') {
		head.style.color = "#BB6500";
	}
	if (except == 'Art') {
		head.style.color = "#961800";
	}
	if (except == 'Edu') {
		head.style.color = "#002B60";
	}
}

var asteriskMouseOut = function(except) {
	var one = document.getElementById("ast"+except+"1");
	var two = document.getElementById("ast"+except+"2");
	
	document.getElementById(except+"Head").style.color = "#000";
// Keeps minus sign
	if (one.className == "minus selected") {
		one.className = "minus selected";
		two.className = "minus";
	} else if (one.className == "minus anti45") {
// Keeps asterisk sign
		one.className = "minus";
		two.className = "minus plus";
	}

	if (except == 'Pers') {
		one.style.backgroundColor = "#BB6500";
		two.style.backgroundColor = "#BB6500";
	}
	if (except == 'Art') {
		one.style.backgroundColor = "#961800";
		two.style.backgroundColor = "#961800";
	}
	if (except == 'Edu') {
		one.style.backgroundColor = "#002B60";
		two.style.backgroundColor = "#002B60";
	}
}	

// End of custom accordion


var pageScroll = function() {
	var walt = Math.ceil(pageYOffset / 10);

	if (pageYOffset == 0) {
		return    
	} else if (pageYOffset != 0) {
    	window.scrollBy(0,(-walt)); // horizontal and vertical scroll increments
    	var scrollDelay = setTimeout('pageScroll()',10); // scrolls every 10 milliseconds
    };	
};
 
var scroll = function() {
	scroller = document.getElementById("toTop");

	var displacement = document.body.scrollTop;
	
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

// When window is scrolled, run scroll function
window.onscroll = scroll;


// Turns all Contact links black except for the selected one
var contactSelector = function(except) {
	for (i=0;i<contactArray.length;i++) {
		if (contactArray[i] != except) { 
			document.getElementById(contactArray[i]).style.backgroundColor = "#090909";
		}
	}
}

// Color randomizer for Contact links
var contactDeselector = function(except) {
	for (i=0;i<contactArray.length;i++) {
		if (contactArray[i] != except) { 
			var ranColor = colorArray[Math.floor(Math.random()*3)];
			document.getElementById(contactArray[i]).style.backgroundColor = ranColor;
		}	
	}
}


// Contact circle for phone
var phoneClick = function() {
	var phone = document.getElementById("cont8");
	var text = document.getElementById("phoneText");
	if (phone.style.height == "" || phone.style.height == "96px") {
		phone.style.height = "215px";
		text.style.visibility = "visible";
		text.style.opacity = "1";
	} else if (phone.style.height == "215px") {
		phone.style.height = "96px";
		text.style.visibility = "hidden";
		text.style.opacity = "0";
	};
}

// Contact circle for email
var emailClick = function() {
	var email = document.getElementById("cont9");
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



var aboutCrumble = function() {
	var aboutPage = document.getElementById('aboutPage'),
		aspire = document.getElementById('aspire'), 
		aspireWidth = aspire.clientWidth, 
		aspireProjectedWidth = aspire.clientWidth*(23/17),
		aspirePercentProjected = 100*((aspire.clientWidth/window.innerWidth)*(23/17)).toFixed(2)
	console.log(aspireWidth);

// Checks whether the site is on landing page or not, based off the size of #aspire
	if (aspirePercentProjected > 80 && aspirePercentProjected < 92) {
		var aspireWidth = aspireProjectedWidth	
	}  
	console.log(aspireWidth);
	
	if (aspireWidth <= 918) {
		var aboutTop = 184+((918-aspireWidth));

		if (aboutTop >= 475) {
	// Margin at lowest page expansion
			aboutPage.style.marginTop = '475px';
		} else { 
	// Margin in between both caps of page expansion
			aboutPage.style.marginTop = aboutTop + 'px';
		};
	} else {
	// Margin at fullest page expansion		
		aboutPage.style.marginTop = '184px';
	}

// Makes page responsive with Margin Left	

	if (aspireWidth < 500) {
		aboutPage.style.marginLeft = '-80px';
	} else if (aspireWidth < 550) {
		aboutPage.style.marginLeft = '-60px';
	} else if (aspireWidth < 600) {
		aboutPage.style.marginLeft = '-40px';
	} else if (aspireWidth < 650) {
		aboutPage.style.marginLeft = '-20px';
	} else if (aspireWidth < 700) {
		aboutPage.style.marginLeft = '10px';
	} else if (aspireWidth < 750) {
		aboutPage.style.marginLeft = '2%';
	} else if (aspireWidth < 800) {
		aboutPage.style.marginLeft = '2.6%';
	} else if (aspireWidth < 850) {
		aboutPage.style.marginLeft = '3.2%';
	} else if (aspireWidth < 900) {
		aboutPage.style.marginLeft = '4.4%';
	} else if (aspireWidth < 950) {
		aboutPage.style.marginLeft = '5.6%';
	} else if (aspireWidth < 1000) {
		aboutPage.style.marginLeft = '7.8%';
	} else {
		aboutPage.style.marginLeft = '10%';
	} 
}

function resumeCrumble () {
		var resumePage = document.getElementById('resumePage'),
		aspire = document.getElementById('aspire'), 
		aspireWidth = aspire.clientWidth, 
		aspireProjectedWidth = aspire.clientWidth*(23/17),
		aspirePercentProjected = 100*((aspire.clientWidth/window.innerWidth)*(23/17)).toFixed(2)
	console.log(aspireWidth);

// Checks whether the site is on landing page or not, based off the size of #aspire
	if (aspirePercentProjected > 80 && aspirePercentProjected < 92) {
		var aspireWidth = aspireProjectedWidth;
	}  
	console.log(aspireWidth);
	
	if (aspireWidth <= 1105) {
		var resumeTop = 134+((1105-aspireWidth)*(4/7));

		if (resumeTop >= 455) {
	// Margin at lowest page expansion
			resumePage.style.marginTop = '455px';
		} else { 
	// Margin in between both caps of page expansion
	console.log('resume ' + resumeTop);
			resumePage.style.marginTop = '455px';
			resumePage.style.marginTop = resumeTop + 'px';
		};
	} else {
	// Margin at fullest page expansion		
		resumePage.style.marginTop = '134px';
	}

// var aboutPage = document.getElementById('resumePage');
	// var aspire = document.getElementById('aspire');

	// var aspireWidth = aspire.clientWidth;

	// if (aspire.clientWidth <= 1105) {
	// 	var resumeTop = (134+(1105-aspire.clientWidth)*(4/7));

	// 	resumePage.style.marginTop = resumeTop+'px';

	// 	if (resumeTop >= 455) {
	// 		resumePage.style.marginTop = '455px';
	// 	} 

	// } else {
	// 	resumePage.style.marginTop = '134px';
	// }; 
}

var contactCrumble = function() {
	var cont1 = document.getElementById('cont1')
	var cont2 = document.getElementById('cont2')
	var cont3 = document.getElementById('cont3')
	var cont4 = document.getElementById('cont4')
	var cont5 = document.getElementById('cont5')
	var cont6 = document.getElementById('cont6')
	var cont7 = document.getElementById('cont7')
	var cont8 = document.getElementById('cont8')
	var cont9 = document.getElementById('cont9')

	var contactPage = document.getElementById('contactPage'),
		aspire = document.getElementById('aspire'), 
		aspireWidth = aspire.clientWidth, 
		aspireProjectedWidth = aspire.clientWidth*(23/17),
		aspirePercentProjected = 100*((aspire.clientWidth/window.innerWidth)*(23/17)).toFixed(2)
	console.log(aspireWidth);

// Checks whether the site is on landing page or not, based off the size of #aspire
	if (aspirePercentProjected > 80 && aspirePercentProjected < 92) {
		var aspireWidth = aspireProjectedWidth;
	}  
	console.log(aspireWidth);
	
	if (aspireWidth <= 1105) {
		var contactTop = 40+((1105-aspireWidth)*(3/5));

		if (contactTop >= 455) {
	// Margin at lowest page expansion
			contactPage.style.marginTop = '455px';
		} else { 
	// Margin in between both caps of page expansion
			contactPage.style.marginTop = contactTop + 'px';
		};
	} else {
	// Margin at fullest page expansion		
		contactPage.style.marginTop = '40px';
	}

// Adjusts links into shapes
	if (aspireWidth < 550) {
// Stage 6
	contactPage.style.marginLeft = '24%'

	cont4.style.backgroundColor = '#961800';
	cont4.style.marginTop = '134px';
	cont4.style.marginLeft = '-77px';

	cont5.style.backgroundColor = '#961800';
	cont5.style.marginTop = '230px';
	cont5.style.marginLeft = '-132px';

	cont6.style.backgroundColor = '#961800';
	cont6.style.marginTop = '326px';
	cont6.style.marginLeft = '-187px';

	cont7.style.backgroundColor = '#BB6500';
	cont7.style.marginTop = '326px';
	cont7.style.marginLeft = '-22px';

	cont8.style.backgroundColor = '#BB6500';
	cont8.style.marginTop = '326px';
	cont8.style.marginLeft = '88px';

	cont9.style.backgroundColor = '#BB6500';
	cont9.style.marginTop = '326px';
	cont9.style.marginLeft = '198px';

	} else if (aspireWidth < 650) {
// Stage 5
	contactPage.style.marginLeft = '22%'

	cont4.style.backgroundColor = '#961800';
	cont4.style.marginTop = '170px';
	cont4.style.marginLeft = '-55px';

	cont5.style.backgroundColor = '#961800';
	cont5.style.marginTop = '266px';
	cont5.style.marginLeft = '-110px';

	cont6.style.backgroundColor = '#961800';
	cont6.style.marginTop = '362px';
	cont6.style.marginLeft = '-165px';

	cont7.style.backgroundColor = '#BB6500';
	cont7.style.marginTop = '323px';
	cont7.style.marginLeft = '19px';

	cont8.style.backgroundColor = '#BB6500';
	cont8.style.marginTop = '323px';
	cont8.style.marginLeft = '129px';

	cont9.style.backgroundColor = '#BB6500';
	cont9.style.marginTop = '323px';
	cont9.style.marginLeft = '239px';
	} else if (aspireWidth < 700) {
// Stage 4
	contactPage.style.marginLeft = '20%'

	cont4.style.backgroundColor = '#961800';
	cont4.style.marginTop = '206px';
	cont4.style.marginLeft = '-33px';

	cont5.style.backgroundColor = '#961800';
	cont5.style.marginTop = '302px';
	cont5.style.marginLeft = '-88px';

	cont6.style.backgroundColor = '#961800';
	cont6.style.marginTop = '398px';
	cont6.style.marginLeft = '-143px';

	cont7.style.backgroundColor = '#BB6500';
	cont7.style.marginTop = '320px';
	cont7.style.marginLeft = '54px';

	cont8.style.backgroundColor = '#BB6500';
	cont8.style.marginTop = '320px';
	cont8.style.marginLeft = '164px';

	cont9.style.backgroundColor = '#BB6500';
	cont9.style.marginTop = '320px';
	cont9.style.marginLeft = '274px';
	} else if (aspireWidth < 800) {
// Stage 3
	contactPage.style.marginLeft = '18%'

	cont4.style.backgroundColor = '#961800';
	cont4.style.marginTop = '242px';
	cont4.style.marginLeft = '-11px';

	cont5.style.backgroundColor = '#961800';
	cont5.style.marginTop = '338px';
	cont5.style.marginLeft = '-66px';

	cont6.style.backgroundColor = '#961800';
	cont6.style.marginTop = '434px';
	cont6.style.marginLeft = '-121px';

	cont7.style.backgroundColor = '#BB6500';
	cont7.style.marginTop = '317px';
	cont7.style.marginLeft = '89px';

	cont8.style.backgroundColor = '#BB6500';
	cont8.style.marginTop = '317px';
	cont8.style.marginLeft = '199px';

	cont9.style.backgroundColor = '#BB6500';
	cont9.style.marginTop = '317px';
	cont9.style.marginLeft = '309px';

	} else  {
// Stage 2
	contactPage.style.marginLeft = '16%'

	cont4.style.backgroundColor = '#961800';
	cont4.style.marginTop = '278px';
	cont4.style.marginLeft = '11px';

	cont5.style.backgroundColor = '#961800';
	cont5.style.marginTop = '372px';
	cont5.style.marginLeft = '-44px';

	cont6.style.backgroundColor = '#961800';
	cont6.style.marginTop = '468px';
	cont6.style.marginLeft = '-99px';

	cont7.style.backgroundColor = '#BB6500';
	cont7.style.marginTop = '315px';
	cont7.style.marginLeft = '152px';

	cont8.style.backgroundColor = '#BB6500';
	cont8.style.marginTop = '315px';
	cont8.style.marginLeft = '262px';

	cont9.style.backgroundColor = '#BB6500';
	cont9.style.marginTop = '315px';
	cont9.style.marginLeft = '372px';

	} 
}

window.onresize = function() {
	aboutCrumble();
	resumeCrumble();
	contactCrumble();
};

window.onload = function() {
	
	aboutCrumble();
	resumeCrumble();
	contactCrumble();
}