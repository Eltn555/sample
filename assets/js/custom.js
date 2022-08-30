(function ($) {

	window.onload = () => {
		var btns = document.getElementsByClassName("btn");
		var op = document.getElementById("output");
		var fn = false;
		var sn = false;
		var oper = false;
		var hn = false;
		var closed = true;

		var hb = document.getElementById("homebutton");

		var sb = document.getElementById("hitBox");


		


		for (var i = 0; i < btns.length; i++) {
			btns[i].addEventListener("click", processTouch);
		}

		function processTouch(e) {
			if ((!isNaN(e.target.innerHTML) || e.target.innerHTML == ".") && !fn && !oper && e.target.innerHTML !== "0") {
				if (e.target.innerHTML == ".") {
					op.innerHTML = "0" + e.target.innerHTML;
					fn = op.innerHTML;
				} else {
					op.innerHTML = e.target.innerHTML;
					fn = op.innerHTML;
				}
			} else if ((!isNaN(e.target.innerHTML) || e.target.innerHTML == ".") && fn && !oper) {
				if (e.target.innerHTML == ".") {
					if (op.innerHTML.indexOf(".") == -1) {
						op.innerHTML += e.target.innerHTML;
						fn = op.innerHTML;
					}
				} else {
					op.innerHTML += e.target.innerHTML;
					fn = op.innerHTML;
				}
			} else if ((!isNaN(e.target.innerHTML) || e.target.innerHTML == ".") && fn && oper) {

				if (sn !== false) {
					if (sn.indexOf(".") == -1 && e.target.innerHTML == ".") {
						(sn.length == 0) ? sn += "0." : sn += ".";
						hn = sn;
						op.innerHTML = sn;
					} else {
						if (e.target.innerHTML !== ".") {
							sn += e.target.innerHTML;
							hn = sn;
							op.innerHTML = sn;
						}
					}
				}
			} else if (isNaN(e.target.innerHTML)) {
				if ((hn == "0" && oper == "/") || op.innerHTML == "Error") {
					(e.target.innerHTML == "C") ? op.innerHTML = 0 : op.innerHTML = "Error";
					fn = false;
					sn = false;
					oper = false;
					hn = false;
				} else {
					switch (e.target.innerHTML) {
						case "C":
							op.innerHTML = 0;
							fn = false;
							sn = false;
							oper = false;
							hn = false;
							break;
						case "±":
							op.innerHTML = -1 * op.innerHTML;
							((fn && !sn) || !fn) ? fn = op.innerHTML : hn = sn = op.innerHTML;

							break;
						case "%":
							op.innerHTML = op.innerHTML / 100;
							((fn && !sn) || !fn) ? fn = op.innerHTML : hn = sn = op.innerHTML;
							break;
						case "+":
							if (fn && !sn) {
								sn = "";
								oper = "+";
							} else {
								op.innerHTML = Math.round(10000000 * eval(fn + oper + sn)) / 10000000;
								fn = op.innerHTML;
								sn = "";
								oper = "+";
							}
							break;
						case "-":
							if (fn && !sn) {
								sn = "";
								oper = "-";
							} else {
								op.innerHTML = Math.round(10000000 * eval(fn + oper + sn)) / 10000000;
								fn = op.innerHTML;
								sn = "";
								oper = "-";
							}
							break;
						case "÷":
							if (fn && !sn) {
								sn = "";
								oper = "/";
							} else {
								op.innerHTML = Math.round(10000000 * eval(fn + oper + sn)) / 10000000;
								fn = op.innerHTML;
								sn = "";
								oper = "/";
							}
							break;
						case "x":
							if (fn && !sn) {
								sn = "";
								oper = "*";
							} else {
								op.innerHTML = Math.round(10000000 * eval(fn + oper + sn)) / 10000000;
								fn = op.innerHTML;
								sn = "";
								oper = "*";
							}
							break;
						case "=":
							if (fn && hn && oper) {

								op.innerHTML = Math.round(10000000 * eval(fn + oper + hn)) / 10000000;
								fn = op.innerHTML;
								sn = false;
							}
							break;
						default:

							break;
					}
				}

			}
		}
	}

	"use strict";

	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	  var box = $('.header-text').height();
	  var header = $('header').height();

	  if (scroll >= box - header) {
	    $("header").addClass("background-header");
	  } else {
	    $("header").removeClass("background-header");
	  }
	});
	

	$('.filters ul li').click(function(){
	  $('.filters ul li').removeClass('active');
	  $(this).addClass('active');
	  
	  var data = $(this).attr('data-filter');
	  $grid.isotope({
	    filter: data
	  })
	});

	var $grid = $(".grid").isotope({
	  itemSelector: ".all",
	  percentPosition: true,
	  masonry: {
	    columnWidth: ".all"
	  }
	})

	$(".Modern-Slider").slick({
	    autoplay:true,
	    autoplaySpeed:10000,
	    speed:600,
	    slidesToShow:1,
	    slidesToScroll:1,
	    pauseOnHover:false,
	    dots:true,
	    pauseOnDotsHover:true,
	    cssEase:'linear',
	   // fade:true,
	    draggable:false,
	    prevArrow:'<button class="PrevArrow"></button>',
	    nextArrow:'<button class="NextArrow"></button>', 
	  });

	$('.search-icon a').on("click", function(event) {
	    event.preventDefault();
	    $("#search").addClass("open");
	    $('#search > form > input[type="search"]').focus();
	  });

	  $("#search, #search button.close").on("click keyup", function(event) {
	    if (
	      event.target == this ||
	      event.target.className == "close" ||
	      event.keyCode == 27
	    ) {
	      $(this).removeClass("open");
	    }
	  });

	  $("#search-box").submit(function(event) {
	    event.preventDefault();
	    return false;
	  });


	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:false,
	    pagination:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	})

	// Window Resize Mobile Menu Fix
	mobileNav();


	// Scroll animation init
	window.sr = new scrollReveal();
	

	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	// Menu elevator animation
	$('a[href*=\\#]:not([href=\\#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var width = $(window).width();
				if(width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);	
				}				
				$('html,body').animate({
					scrollTop: (target.offset().top) - 80
				}, 700);
				return false;
			}
		}
	});

	$(document).ready(function () {
	    $(document).on("scroll", onScroll);
	    
	    //smoothscroll
	    $('a[href^="#"]').on('click', function (e) {
	        e.preventDefault();
	        $(document).off("scroll");
	        
	        $('a').each(function () {
	            $(this).removeClass('active');
	        })
	        $(this).addClass('active');
	      
	        var target = this.hash,
	        menu = target;
	       	var target = $(this.hash);
	        $('html, body').stop().animate({
	            scrollTop: (target.offset().top) - 79
	        }, 500, 'swing', function () {
	            window.location.hash = target;
	            $(document).on("scroll", onScroll);
	        });
	    });
	});

	function onScroll(event){
	    var scrollPos = $(document).scrollTop();
	    $('.nav a').each(function () {
	        var currLink = $(this);
	        var refElement = $(currLink.attr("href"));
	        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	            $('.nav ul li a').removeClass("active");
	            currLink.addClass("active");
	        }
	        else{
	            currLink.removeClass("active");
	        }
	    });
	}


	// Page loading animation
	$(window).on('load', function() {
		if($('.cover').length){
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$("#preloader").animate({
			'opacity': '0'
		}, 600, function(){
			setTimeout(function(){
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});


	// Window Resize Mobile Menu Fix
	$(window).on('resize', function() {
		mobileNav();
	});


	// Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function() {
			if(width < 767) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}


})(window.jQuery);