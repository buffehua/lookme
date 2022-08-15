// 分點資訊

$(document).ready(function() {

	var widget = $('.tabs_site');

	var tabs = widget.find('ul a'),
		content = widget.find('.tabs_content_placeholder > div');

	tabs.on('click', function (e) {

		e.preventDefault();

		var index = $(this).data('index');

		tabs.removeClass('tab_active');
		content.removeClass('tab_content_active');

		$(this).addClass('tab_active');
		content.eq(index).addClass('tab_content_active');

		$(this).addClass('tabs_click');
		$(tabs).not(this).removeClass("tabs_click");

	});

});

