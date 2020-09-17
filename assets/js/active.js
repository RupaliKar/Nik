$(document).ready(function() {

/* Ityped */
ityped.init(document.querySelector("#ityped"), {
	strings: ['E- commerce.'],
	typeSpeed: 55,
	  startDelay: 200,
	  backSpeed: 40,
	  backDelay: 1500,
	  loop: true,
	  cursorChar: "|",
	  
  });

// Menu
	$(".navbar-nav li a").on("click", function (event) {
        if (!$(this).parent().hasClass('dropdown'))
            $(".navbar-collapse").collapse('hide');
	});
	

}); 

/* Fixed Menu */
$(document).on('scroll', function() {
    var scrollPos = $(this).scrollTop();

    if( scrollPos > 250 ) {
        $('.menu-area').addClass('navbar-home');
    }

    else {
        $('.menu-area').removeClass('navbar-home');
    }
});
