timeend = new Date("12 April 2016 11:00:00");

$(document).ready(function() {

	function time() {
		today = new Date();
	    today = Math.floor((timeend-today)/1000);

	    tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
	    tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
	    thour=today%24; today=Math.floor(today/24);

		timestrd = today;
		timestrh = thour;
		timestrm = tmin;
		timestrs = tsec;
		document.getElementById('d_time').innerHTML = timestrd;
		document.getElementById('h_time').innerHTML = timestrh;
		document.getElementById('m_time').innerHTML = timestrm;
		document.getElementById('sec').innerHTML = timestrs;
		window.setTimeout("time()",1000);
	}

	time();
	setInterval(time, 1000);

	$.stellar({
		responsive: true,
		horizontalOffset: 40
	});

	$(".carousel").owlCarousel({
		loop: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			}
		},
		navText: ""
	});

	function wResize() {
		$("header").css("min-height", $(window).height());
	};
	wResize();
	$(window).resize(function() {
		wResize()
	});


	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	})).eq(0).addClass("active");

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
			}, 1000);
		});
	});
	
});