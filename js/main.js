
// js for menu hambuger header
$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });

  // $('#demo').click(function(){
  // 	if($('i.icon').hasClass("fa-chevron-down")){
	 //  	$('i.icon').removeClass("fa-chevron-down");
	 //  	$('i.icon').addClass("fa-chevron-up");
  // 	}
  // 	else{
  // 		$('i.icon').addClass("fa-chevron-down");
	 //  	$('i.icon').removeClass("fa-chevron-up");
  // 	}
  // });
});

// js for click menu toggle
