(function($) {
	var defaults = {
		color: '#fff',
		bgcolor:'purple',
		//delay: 1000,
		size: '128px',
		opacity: .5

	}

	$.jQuiti = function(options) {
		var settings = $.extend({}, defaults, options);
		if (!settings.delay) settings.delay = 1000;
		if (!settings.stay) settings.stay = 200;
		var holder = 'jq-' + Math.random().toString(36).substr(2,5);

		var ad = $('<div>').css({
			// color: settings.color,
			'top':0, 'bottom':0, 'left':0, 'right':0,
			'position': 'absolute', 'z-index':'9999',
			'font-size': settings.size, 'margin':'auto', 'width': '100%',
			'background-color': settings.bgcolor,
			'color': settings.color,
			'text-align': 'center',
			'vertical-align': 'middle',
			'opacity' : settings.opacity,
			'line-height': (screen.height/2) + 'px',
			'font-weight' : 900,
		}).attr('id', holder).hide().text('JEQUITI!!');

		$('body').append(ad);


		window.flashJ = function(){
			console.warn('ha!');
			$('#' + holder).show();
			setTimeout(function(){
				$('#' + holder).hide();
			}, settings.stay);

			var _delay = settings.maxdelay ?
				Math.floor(Math.random() * settings.maxdelay) + settings.delay :
				settings.delay;

			setTimeout(window.flashJ, _delay);
		}
		window.flashJ();

	}
}(jQuery));

