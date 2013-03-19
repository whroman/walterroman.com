
var hover = function(changeOpac,setOpac,changeBlur,setBlur,changeColor,setColor,changeText,setText,changeFont,setFont) {
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


					console.log(elemFont.childNodes[i]);
					console.log(i);	


		if (i==6) {
			elemFont.childNodes[i].className = setFont;
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