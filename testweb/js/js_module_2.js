$(function(){
	$('ul').on('mouseenter', 'li', function(e) {
		$('#huakuai').css("left", e.currentTarget.offsetLeft + "px");
	});
	$('ul').on('mouseleave', 'li', function(e) {
		$('#huakuai').css("left", $('.selected_nav')[0].offsetLeft + "px");
	});
	$('ul').on('click','li',function(e){
		$('li').removeClass('selected_nav');
		$(this).addClass('selected_nav');
		$('#huakuai').css("left", e.currentTarget.offsetLeft + "px");
	});
});
