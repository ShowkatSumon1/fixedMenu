jQuery(document).ready(function(){

	//Test Margin

	/*jQuery(".scrolltop").click(function(){
		jQuery("html").animate({"margin" : "20px"}, 2000);
	});*/

//********************

	//Scroll To Top first

/*	jQuery(".scrolltop").click(function(){
		jQuery("html").animate({"scrollTop" : "200px"}, 1000)

		return false;
	});*/

	jQuery(".scrolltop").click(function(){
		jQuery("html").animate({"scrollTop" : "0"}, 500)

		return false;
	});

	// Ektu dure eshe show korte

	jQuery(window).scroll(function(){

//Scroll Top
		var stp = jQuery(window).scrollTop();

		if(stp > 200){
			jQuery(".scrolltop").show();
		}
		else {
			jQuery(".scrolltop").removeAttr("style");
		}

//Fixed Menu

	var dSize = jQuery(".header-area").outerHeight(true);

		if(stp > dSize){
			jQuery(".main-menu").addClass("fixed");
		}
		else {
			jQuery(".main-menu").removeClass("fixed");
		}

	});

});