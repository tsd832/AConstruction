function notify(){
  $("#main-menu").toggle("slow", function(){});
}





$(document).ready(function()
{
  $("#button").click(notify);
})


$(window).on('resize', function(event){
	var windowSize = $(window).width(); // Could've done $(this).width()
    if(windowSize > 960){
    	$('#main-menu').css('display', 'inline');
    }
});
