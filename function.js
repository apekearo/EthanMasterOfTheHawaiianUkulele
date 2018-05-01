$(document).ready(function(){
    $('#main').hide();
    $('.enter_link').click(function() { 
        $(this).parent().fadeOut(500);
        $('#main').show();
 });
});