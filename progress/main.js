$(document).ready(function(){


    $('.BurgerButton').on('click', function(){
        $('.DropDown').toggle('slow');
        if($('#BurgerButton').hasClass('change-burger')) {
			$('body').addClass('stop-scroll');
		} else {
			$('body').removeClass('stop-scroll');
		}
        
    })

});