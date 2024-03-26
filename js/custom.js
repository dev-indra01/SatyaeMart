/******************************************
    File Name: custom.js
*******************************************/

"use strict";



/**== Menu js ==**/

$("#navbar_menu").menumaker({
	title: "Menu",
	format: "multitoggle"
});

/** counter js **/

    $('.counter-count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

/** progress_bar js **/
	
	 $(document).ready(function() {
      $('.progress .progress-bar').css("width",
                function() {
                    return $(this).attr("aria-valuenow") + "%";
                }
        )
    });
	

	
/** header fixed js **/

$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
       $('.header_fixed_on_scroll').addClass('fixed-header');
    }
    else {
       $('.header_fixed_on_scroll').removeClass('fixed-header');
    }
});


// Loader
setTimeout(function(){
    document.getElementById('default_theme').style.display = 'block';
    document.querySelector('.preloader').style.display = 'none';
  }, 500); // Adjust the time as needed
