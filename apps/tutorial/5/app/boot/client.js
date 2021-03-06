//  -   BOOT THE APP  -
jQuery.noConflict();
(function($){
    
    //A static logger for any initialization routines we might add here
    var log = $.logger("Example");
    
    //The environments are described in environments.js
    try{
       $.env('defaults', "dev.client");
    }catch(e){
       log.error("Environmental selection is invalid!").exception(e);
    }
    
    $(document).ready(function(){
        $.boot();
    });    
    
})(jQuery);  
