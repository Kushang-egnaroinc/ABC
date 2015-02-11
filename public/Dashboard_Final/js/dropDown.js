$(document).ready(function(){
    //Handles menu drop down
    $('.dropdown-menu').find('form').click(function (e) {
        e.stopPropagation();
	});
	$('.dropdown-menu').find('a').click(function (e) {
        e.stopPropagation();
	});
});

