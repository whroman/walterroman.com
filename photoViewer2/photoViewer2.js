$(window).load(function() {
	$('.photo img').each(function() {
	  if($(this).width() < $(this).height()) {
	    $(this).addClass("horizontal");
	    console.log('if')
	  } else {
	  	console.log('else')
	  }        
	  console.log($(this).width());
	  console.log($(this).height());
	});

	$(".switch").click(function() {
    $('.h').toggleClass("hide");
    $('.v').toggleClass("show");
  });
});