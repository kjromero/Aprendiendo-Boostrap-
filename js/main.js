$(document).ready(function() {
	var heading = $('.panel-heading');
	$('.panel-title > a').on('click',function(){
		if( $(this).parent().parent().hasClass('closed') ){
			$(heading).addClass('closed');
			$(this).parent().parent().removeClass('closed');
			$(heading).removeClass('activo');
			$(this).parent().parent().addClass('activo');	
		}else{
			$(heading).removeClass('activo');
			$(this).parent().parent().addClass('closed');
		}
	});
});
