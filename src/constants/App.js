import $ from "jQuery"
import Filterizr from "./Filterizr"

/* Filterizr */
$(document).on(function() {

    $('.filterizr-filter li').on(function() {
      $('.filterizr-filter li').removeClass('filtr-active');
      $(this).addClass('filtr-active');
    });
    $('.filterizr-sorting li').on(function() {
      $('.filterizr-sorting li').removeClass('filtr-active');
      $(this).addClass('filtr-active');
    });
  
    var filterizd = $('.filtr-container').filterizr();
  
    filterizd.filterizr('sort', 'title', 'asc');
  
  });