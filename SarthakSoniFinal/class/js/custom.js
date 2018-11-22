$(function(){
   $(".y").slice(0, 4).show();
   $("#load").click(function(e){
       e.preventDefault();
       $(".y:hidden").slice(0, 2).show();
       if($(".y:hidden").length == 0){
           $(this).remove();
       }
   });
});