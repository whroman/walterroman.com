var navArray = ["About","Resume","Contact"];

var navMouseOver = function(circle, text) {
	nav1 = document.getElementById(circle);
	nav1.style.opacity="0.8";

	if (circle == 'About') {
		nav1.style.marginTop="-60px"
		nav1.style.width="205px";
		nav1.style.height="205px";
		nav1.style.borderRadius="205px";
		nav1.style.backgroundColor="#FFD300"
	}

	if (circle == 'Resume') {
		nav1.style.marginTop="40px"
		nav1.style.width="240px";
		nav1.style.height="240px";
		nav1.style.borderRadius="240px";
		nav1.style.backgroundColor="#FFAA00"
	}

	if (circle == 'Contact') {
		nav1.style.marginTop="160px"
		nav1.style.width="245px";
		nav1.style.height="245px";
		nav1.style.borderRadius="245px";
		nav1.style.backgroundColor="#FF7400"
	}

console.log(circle)

	nav2 = document.getElementById(text);
	nav2.style.color = "#000"
}

var navMouseOut = function(circle, text) {
	nav1 = document.getElementById(circle);
	nav1.style.width="100px";
	nav1.style.height="100px";
	nav1.style.borderRadius="100px";
	nav1.style.opacity="0.6";

	if (circle == 'About') {
		nav1.style.marginTop="0px"
	}

	if (circle == 'Resume') {
		nav1.style.marginTop="120px"
	}

	if (circle == 'Contact') {
		nav1.style.marginTop="240px"
	}


	nav2 = document.getElementById(text);
	nav2.style.color = "#777"
}