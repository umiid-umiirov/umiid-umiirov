$(document).ready(function() {
   $('.menu__burger').click(function() {
       $('.menu__burger').toggleClass('open-menu');
   });
});
$(document).ready(function() {
   $('.menu__burger').click(function(){
       $('.menu__burger').toggleClass('open-menu');
       $('.menu__list').toggleClass('open-menu');
   });
});