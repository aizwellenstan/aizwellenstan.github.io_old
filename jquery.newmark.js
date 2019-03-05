(function() {
	jQuery.fn.newmark = function(config){
		config = jQuery.extend({
				past: 72,
				icon: "<span>[new]</sapn>"
			},config);

		var currentDate = new Date();

		$(this).each(function(){
			var entryDay = $(this).attr('title');

			var day_array = entryDay.split(":");
			var entryDate = new Date(day_array[0], day_array[1]-1, day_array[2]);

			var diff = (currentDate.getTime() - entryDate.getTime())/(60*60*1000);
			diff = Math.ceil(diff);

			if( diff <= config.past ){
				$(this).before( config.icon );
			}
		});
	};
})(jQuery);