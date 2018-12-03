// Header scroll
		$(window).scroll(function() {
		   if ($(this).scrollTop() > 1){
		      $('.header').addClass("fix");
		   }
		   else{
		      $('.header').removeClass("fix");
		   }
		});
	
// Scroll to Top
  		$(function() {
  			$(window).scroll(function() {
  				if($(this).scrollTop() != 0) {
  					$('.btn-top').fadeIn();
  				} else {
  					$('.btn-top').fadeOut();
  				}
  			});
  			$('.btn-top').click(function() {
  				$('body,html').animate({scrollTop:0},500);
  			});
  		});
  	
// Image bottom-galary corusel
		document.getElementById('links').onclick = function (event) {
		    event = event || window.event;
		    var target = event.target || event.srcElement,
		        link = target.src ? target.parentNode : target,
		        options = {index: link, event: event},
		        links = this.getElementsByTagName('a');
		    blueimp.Gallery(links, options);
		};
	