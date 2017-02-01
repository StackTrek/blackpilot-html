
"use strict";
$(function() {
  $('.date-select').datepicker({});
  $('.control-button-trigger').each(function(){
      $(this).on('click',function(e){
        e.preventDefault();
        $('.control-button-trigger').removeClass('active');
        $(this).addClass('active');
        var elHref = $(this).attr('href');
        $('.control-properties').removeClass('open-this');
        $(elHref).addClass('open-this');

      });
  });
});
