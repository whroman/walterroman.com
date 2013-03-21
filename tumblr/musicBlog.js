
var hover = function(changeOpac,setOpac,changeBlur,setBlur,changeColor,setColor,changeText,setText,changeFont,setFont, setFont2) {
	var elemOpac = document.getElementById(changeOpac);
	elemOpac.className = setOpac;
	var elemBlur = document.getElementById(changeBlur);
	elemBlur.className = setBlur;
	var elemColor = document.getElementById(changeColor);
	elemColor.className = setColor;

	var elemText = document.getElementById(changeText);
	elemText.className = setText;


	var elemFont = document.getElementById(changeFont);

	for (i=0;i<elemFont.childNodes.length;i++) {
		if (i==4) {
			elemFont.childNodes[i].className = setFont + ' ' + setFont2;
		}
		else if (i==6) {
			elemFont.childNodes[i].className = setFont + ' ' + setFont2;
		} else {
					elemFont.childNodes[i].className = setFont;

		}
	}
}

	// var iconArray = ['reblogButton','favoriteButton','backButton','frontButton','archiveButton']


var iconAppear = function(elem) {
	var elem = document.getElementById(elem);

	for (i=0;i<elem.childNodes.length;i++) {
		if (elem.childNodes[i].id != 'playImage' && elem.childNodes[i].id != 'playButton' && elem.childNodes[i].id != 'playImage2' && elem.childNodes[i].id != 'playButton2') {
		elem.childNodes[i].className = 'smallButtons lightOpac vis'
		}
	}
}

var iconDisappear = function(elem) {
	var elem = document.getElementById(elem);

	for (i=0;i<elem.childNodes.length;i++) {
		if (elem.childNodes[i].id != 'playImage' && elem.childNodes[i].id != 'playButton' && elem.childNodes[i].id != 'playImage2' && elem.childNodes[i].id != 'playButton2') {
		elem.childNodes[i].className = 'smallButtons'
	}
	}
}

var sidebar = function() {
	var sidebar = document.getElementById('sidebar');
	var button = document.getElementById('sidebarToggle');
	var holes = document.getElementById('holes');
	var holes2 = document.getElementById('holes2');

	if (sidebar.style.marginLeft == '-405px' || sidebar.style.marginLeft == '') {

		sidebar.style.marginLeft = '-3px'

		button.style.marginLeft = '410px';
		button.style.border = '2px solid black'

		holes.style.margin = '100px auto 200px 45%'
		holes2.style.margin = '100px auto 200px 45%'

	} else {

		sidebar.style.marginLeft = '-405px';

		button.style.marginLeft = '15px';
		button.style.border = 'none';

		holes.style.margin = '100px auto 200px 30%'
		holes2.style.margin = '100px auto 200px 30%'

	} 
	console.log(sidebar.style.marginLeft);
}

var alternate = function() {
	var sidePosts = document.getElementById('postContainer').childNodes;
	for (i=1;i<sidePosts.length;i+=4) {
		
		console.log(sidePosts[i]);

		sidePosts[i].className = 'postAlt'
	}
}