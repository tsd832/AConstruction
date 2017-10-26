function notify(){
  $("#main-menu").toggle("slow", function(){});
}





$(document).ready(function()
{
  $("#button").click(notify);
})
