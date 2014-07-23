var MAIN = {

	containers : {},

	init : function() {

		MAIN.initLoadDynamicContainers();
		MAIN.initHeaderAnimation();

	},

	initLoadDynamicContainers : function() {

		MAIN.containers.body = $('.site-page');

	},

	initHeaderAnimation : function() {

		MAIN.containers.body.addClass("init-animate-header");

	}
	
};

$(function() {
	
	MAIN.init();

}); 