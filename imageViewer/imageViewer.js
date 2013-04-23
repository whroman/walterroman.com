$(document).ready(function() {
	defineID();
	delay();
});

var postArray = [],
	imageArray = [],
	counter = 0;

var defineID = function() {

	var mainWrapper = document.getElementById("mainWrapper").childNodes;

	//
  for (i=0;i<mainWrapper.length;i++) {
  	if (mainWrapper[i].className == "post") {

  		mainWrapper[i].id = "post"+counter;
  		postArray.push(mainWrapper[i]);

  		postArray[counter].childNodes[3].childNodes[1].childNodes[1].id = "img"+counter;

  		console.log(postArray[counter].childNodes[3].childNodes[1]);

  		imageArray.push(postArray[counter].childNodes[3].childNodes[1]);

  		counter += 1;
  	} 
  }
  // console.log(mainWrapper);
}

var setShadows = function() {
	 for (i=0;i<postArray.length;i++) {

	// Sets width of image's shadow to image
 		$(imageArray[i].childNodes[3]).width(
 			imageArray[i].childNodes[1].offsetWidth
 		)
 	} 
}

var delay = function() {
	setTimeout(
		function(){
			setShadows();
		},10
	)
}	