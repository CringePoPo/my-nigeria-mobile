$(document).ready(function(){
   
   $(function(){
    $(".All_links").hide();
   })  

   $(function(){
      $(".TabContainer").hide();
     }) 

     

   $(".open-button") .on("click", function(){
      $(".TabContainer").slideToggle(),
      $(".ContentArea").slideToggle();
      $(".FormPage").slideToggle();
     })

  

     $(".discover_btn") .on("click", function(){
      $(".TabContainer").slideToggle();
      $(".ContentArea").slideToggle();
      $(".FormPage").slideToggle();
     }) 

   $(".toggle-btn1") .on("click", function(){
    $(".All_links--news").slideToggle(200);
   })     
   
   $(".toggle-btn2") .on("click", function(){
    $(".All_links--politics").slideToggle(200);
   }) 

   $(".toggle-btn3") .on("click", function(){
    $(".All_links--business").slideToggle(200);
   }) 

   $(".toggle-btn4") .on("click", function(){
    $(".All_links--sports").slideToggle(200);
   }) 

   $(".toggle-btn5") .on("click", function(){
    $(".All_links--TvRadio").slideToggle(200);
   }) 

   $(".toggle-btn6") .on("click", function(){
    $(".All_links--entertain").slideToggle(200);
   }) 

   $(".toggle-btn7") .on("click", function(){
    $(".All_links--africa").slideToggle(200);
   }) 

});
