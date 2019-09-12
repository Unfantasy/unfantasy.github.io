;(function () {
	
	'use strict';

	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// OffCanvass
	var offCanvass = function() {
		$('body').on('click', '.js-fh5co-menu-btn, .js-fh5co-offcanvass-close', function(){
			$('#fh5co-offcanvass').toggleClass('fh5co-awake');
		});
	};

	// Click outside of offcanvass
	var mobileMenuOutsideClick = function() {
		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvass, .js-fh5co-menu-btn");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	    	if ( $('#fh5co-offcanvass').hasClass('fh5co-awake') ) {
	    		$('#fh5co-offcanvass').removeClass('fh5co-awake');
	    	}
	    }
		});

		$(window).scroll(function(){
			if ( $(window).scrollTop() > 500 ) {
				if ( $('#fh5co-offcanvass').hasClass('fh5co-awake') ) {
		    		$('#fh5co-offcanvass').removeClass('fh5co-awake');
		    	}
	    	}
		});
	};

	// Magnific Popup
	
	var magnifPopup = function() {
		$('.image-popup').magnificPopup({
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-with-zoom',
			titleSrc: 'title',
			gallery:{
				enabled:true
			},
			zoom: {
				enabled: true, // By default it's false, so don't forget to enable it

				duration: 300, // duration of the effect, in milliseconds
				easing: 'ease-in-out', // CSS transition easing function

				// The "opener" function should return the element from which popup will be zoomed in
				// and to which popup will be scaled down
				// By defailt it looks for an image tag:
				opener: function(openerElement) {
				// openerElement is the element on which popup was initialized, in this case its <a> tag
				// you don't need to add "opener" option if this code matches your needs, it's defailt one.
				return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}
		});
	};



	var animateBoxWayPoint = function() {

		if ($('.animate-box').length > 0) {
			$('.animate-box').waypoint( function( direction ) {

				if( direction === 'down' && !$(this).hasClass('animated') ) {
					$(this.element).addClass('bounceIn animated');
				}

			} , { offset: '75%' } );
		}

	};

    //function insertImg(){
    //    var images = 'p2328081803.jpg,p2328081805.jpg,p2328081806.jpg,p2328081809.jpg,p2328081812.jpg,p2328081815.jpg,p2328081816.jpg,p2328081817.jpg,p2328081818.jpg,p2328081842.jpg,p2328081843.jpg,p2328081844.jpg,p2328081845.jpg,p2328081846.jpg,p2328081847.jpg,p2328081848.jpg,p2328081849.jpg,p2328081850.jpg,p2328081865.jpg,p2328081866.jpg,p2328081867.jpg,p2328081868.jpg,p2328081869.jpg,p2328081870.jpg,p2328081871.jpg,p2328081874.jpg,p2328081875.jpg,p2328081891.jpg,p2328081892.jpg,p2328081893.jpg,p2328081894.jpg,p2328081895.jpg,p2328081896.jpg,p2328081897.jpg,p2328081898.jpg,p2328081899.jpg,p2328081912.jpg,p2328081913.jpg,p2328081914.jpg,p2328081915.jpg,p2328081916.jpg,p2328081917.jpg,p2328081918.jpg,p2328081919.jpg,p2328081920.jpg,p2328081947.jpg,p2328081949.jpg,p2328081950.jpg,p2328081951.jpg,p2328081952.jpg,p2328081953.jpg,p2328081954.jpg,p2328081955.jpg,p2328081956.jpg,p2328081966.jpg,p2328081967.jpg,p2328081968.jpg,p2328081969.jpg,p2328081970.jpg,p2328081971.jpg,p2328081972.jpg,p2328081973.jpg,p2328081974.jpg,p2328081987.jpg,p2328081988.jpg,p2328081989.jpg,p2328081990.jpg,p2328081991.jpg,p2328081992.jpg,p2328081993.jpg,p2328081994.jpg,p2328081995.jpg,p2328082013.jpg,p2328082014.jpg,p2328082015.jpg,p2328082016.jpg,p2328082018.jpg,p2328082019.jpg,p2328082020.jpg,p2328082022.jpg,p2328082043.jpg,p2328082044.jpg,p2328082045.jpg,p2328082046.jpg,p2328082047.jpg,p2328082048.jpg,p2328082049.jpg,p2328082050.jpg,p2328082051.jpg,p2328082064.jpg,p2328082065.jpg,p2328082066.jpg,p2328082067.jpg,p2328082069.jpg,p2328082071.jpg,p2328082072.jpg,p2328082073.jpg,p2328082074.jpg,p2328082087.jpg,p2328082089.jpg,p2328082090.jpg,p2328082091.jpg,p2328082092.jpg,p2328082093.jpg,p2328082094.jpg,p2328082095.jpg,p2328082096.jpg,p2328082135.jpg,p2328082136.jpg,p2328082137.jpg,p2328082138.jpg,p2328082139.jpg,p2328082140.jpg,p2328082142.jpg,p2328082146.jpg,p2328082147.jpg,p2328082156.jpg,p2328082161.jpg,p2328082162.jpg,p2328082163.jpg,p2328082164.jpg,p2328082165.jpg,p2328082166.jpg,p2328082169.jpg,p2328082170.jpg,p2328082199.jpg,p2328082201.jpg,p2328082202.jpg,p2328082203.jpg,p2328082204.jpg,p2328082205.jpg,p2328082206.jpg,p2328082566.jpg,p2328104175.jpg,p2328104180.jpg,p2328104181.jpg,p2328104182.jpg,p2328104184.jpg,p2328104186.jpg,p2328104187.jpg,p2328104188.jpg,p2328104191.jpg,p2328104215.jpg,p2328104216.jpg,p2328104218.jpg,p2328104220.jpg,p2328104221.jpg,p2328104222.jpg,p2328104223.jpg,p2328104252.jpg,p2328104255.jpg,p2328104256.jpg,p2328104260.jpg,p2328104261.jpg,p2328104262.jpg,p2343444642.jpg,p2343444644.jpg,p2343444646.jpg,p2343444647.jpg,p2343444648.jpg,p2350162825.jpg,p2350162827.jpg,p2350162828.jpg,p2350162829.jpg,p2357025042.jpg,p2357025049.jpg,p2357025050.jpg,p2357025051.jpg,p2357025052.jpg,p2357025057.jpg,p2357025059.jpg,p2357025060.jpg,p2358883942.jpg,p2358883945.jpg,p2358883947.jpg,p2358883951.jpg,p2358883954.jpg,p2358883955.jpg,p2358883959.jpg,p2358883960.jpg,p2358884061.jpg,p2358884073.jpg,p2358884077.jpg,p2358884078.jpg,p2358884080.jpg,p2358884081.jpg,p2358884082.jpg,p2358884083.jpg,p2358884084.jpg,p2358884108.jpg,p2358884109.jpg,p2358884110.jpg,p2358884111.jpg,p2358884112.jpg,p2358884113.jpg,p2358884114.jpg,p2362703512.jpg,p2362703513.jpg,p2362703514.jpg,p2362703515.jpg,p2362703517.jpg,p2362703520.jpg,p2362703521.jpg,p2362703522.jpg,p2362703523.jpg,p2362703561.jpg,p2362703563.jpg,p2362703564.jpg,p2362703565.jpg,p2362703566.jpg,p2362703567.jpg,p2362703568.jpg,p2362703569.jpg,p2362703570.jpg,p2362703619.jpg,p2362703621.jpg,p2362703622.jpg,p2362703623.jpg,p2362703626.jpg,p2362703627.jpg,p2362703628.jpg,p2362703629.jpg,p2362703630.jpg,p2362703718.jpg,p2362703720.jpg,p2362703721.jpg,p2362703722.jpg,p2362703723.jpg,p2362703725.jpg,p2362703726.jpg,p2362703728.jpg,p2362703729.jpg,p2362703883.jpg,p2362703889.jpg,p2362703890.jpg,p2362703892.jpg,p2362703894.jpg,p2362703895.jpg,p2362703897.jpg,p2362703901.jpg,p2362704104.jpg,p2362704110.jpg,p2362704111.jpg,p2362704112.jpg,p2362704113.jpg,p2362704117.jpg,p2362704121.jpg,p2362704122.jpg,p2362704123.jpg,p2362704228.jpg,p2362704230.jpg,p2362704231.jpg,p2362704233.jpg,p2362704235.jpg,p2362704238.jpg,p2362704239.jpg,p2362704243.jpg,p2362704245.jpg,p2362704448.jpg,p2362704454.jpg,p2362704455.jpg,p2362704457.jpg,p2362704459.jpg,p2362704460.jpg,p2362704461.jpg,p2362704677.jpg,p2362704681.jpg,p2362704682.jpg,p2362704683.jpg,p2362704684.jpg,p2362704686.jpg,p2362704687.jpg,p2362704983.jpg,p2362704986.jpg,p2362704990.jpg,p2362704991.jpg,p2362704994.jpg,p2362704995.jpg,p2362705001.jpg,p2366981938.jpg,p2366982182.jpg,p2366982188.jpg,p2366982189.jpg,p2366982192.jpg,p2366982194.jpg,p2366982196.jpg,p2366982197.jpg,p2366982199.jpg,p2366982433.jpg,p2366982440.jpg,p2366982441.jpg,p2366982444.jpg,p2366982449.jpg,p2366982450.jpg,p2366982451.jpg,p2366982452.jpg,p2366982458.jpg,p2366982732.jpg,p2366982744.jpg,p2366982745.jpg,p2366982746.jpg,p2366982747.jpg,p2366982754.jpg,p2366982756.jpg,p2366982759.jpg,p2366983113.jpg,p2366983122.jpg,p2366983125.jpg,p2366983128.jpg,p2366983133.jpg,p2366983134.jpg,p2366983136.jpg,p2366983138.jpg,p2366983141.jpg,p2366983590.jpg,p2366983594.jpg,p2366983595.jpg,p2366983598.jpg,p2366983600.jpg,p2366983603.jpg,p2366983604.jpg,p2366983605.jpg,p2366983606.jpg,p2366983696.jpg,p2366983699.jpg,p2366983700.jpg,p2366983701.jpg,p2366983703.jpg,p2366983704.jpg,p2366983705.jpg,p2366983706.jpg,p2366983707.jpg,p2366983868.jpg,p2369049051.jpg,p2369049053.jpg,p2369049054.jpg,p2369049055.jpg,p2369049057.jpg,p2369049058.jpg,p2369049112.jpg,p2369049114.jpg,p2369049115.jpg,p2369049116.jpg,p2369049117.jpg,p2369049119.jpg,p2370594628.jpg,p2370594629.jpg,p2370594630.jpg,p2370594631.jpg,p2370594633.jpg,p2370594635.jpg,p2370594637.jpg,p2370594638.jpg,p2370594639.jpg,p2370594704.jpg,p2370594706.jpg,p2370594707.jpg,p2370594708.jpg,p2370594709.jpg,p2370594710.jpg,p2370594711.jpg,p2370594712.jpg,p2370594713.jpg,p2370594764.jpg,p2370594768.jpg,p2370594769.jpg,p2370594771.jpg,p2370594775.jpg,p2370594777.jpg,p2370594778.jpg,p2370594779.jpg,p2370594780.jpg,p2370594827.jpg,p2370594830.jpg,p2370594831.jpg,p2370594834.jpg,p2370594835.jpg,p2370594836.jpg,p2370594837.jpg,p2370594838.jpg,p2370594947.jpg,p2370594949.jpg,p2370594950.jpg,p2370594952.jpg,p2371523362.jpg,p2371523368.jpg,p2371523369.jpg,p2371523722.jpg,p2371771631.jpg,p2371771635.jpg,p2371771636.jpg,p2371771637.jpg,p2371771640.jpg,p2371771641.jpg,p2371777706.jpg,p2373139716.jpg,p2373139717.jpg,p2373139718.jpg,p2373139719.jpg,p2373139720.jpg,p2373139721.jpg,p2373139723.jpg,p2373139724.jpg,p2373139725.jpg,p2373139759.jpg,p2373139760.jpg,p2373139761.jpg,p2373139763.jpg,p2373139764.jpg,p2373139765.jpg,p2373139766.jpg,p2373139768.jpg,p2373139769.jpg,p2373139857.jpg,p2374505569.jpg,p2374505574.jpg,p2374505575.jpg,p2374505577.jpg,p2374505582.jpg,p2374505583.jpg,p2374505588.jpg,p2374505590.jpg,p2374505591.jpg,p2374505723.jpg';
    //    var imgArr = images.split(',');
    //    var beforeHtml = '<div class="item"><div class="animate-box"><a href="images/';
    //    var midHtml = '" class="image-popup fh5co-board-img"><img src="images/';
    //    var afterHtml = '" alt="Free HTML5 Bootstrap template"></a></div>';
    //    for(var i=0;i<imgArr.length;i++){
    //        var insertHtml = beforeHtml+imgArr[i]+midHtml+imgArr[i]+afterHtml;
    //        $("#fh5co-board").append(insertHtml);
    //    }
    //}
	

	
	$(function(){
		magnifPopup();
		offCanvass();
		mobileMenuOutsideClick();
		animateBoxWayPoint();
        //insertImg();
	});


}());
