jQuery(document).ready(function($){
	$('.mob_but button').on('click',function(){
		var test_disp = $('.main_menu').css('display');
		if(test_disp == 'none'){
			$('.main_menu').show('fast');
		}else{
			$('.main_menu').hide('fast');
		}
	})

})