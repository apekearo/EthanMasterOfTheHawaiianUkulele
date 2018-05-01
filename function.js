$(document).ready(function(){
    $('#main').hide();
    $('.enter_link').click(function() { 
        $(".enter_link").fadeOut(500);
        $('#main').show();
 });
});