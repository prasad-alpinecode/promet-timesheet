window.FontAwesomeConfig = {
  searchPseudoElements: true
};

// JQUERY SCRIPT FOR COMPONENTS
//=========================================
function func_focus() {
  $(".input").click(function () {

    $(this).parent().addClass("focus");
  }).blur(function () {
    if ($(this).val() === '') {
      $(this).parent().removeClass("focus");
    } else {
      $(this).parent().addClass("focus");
    };
  });
};

// JQUERY SCRIPT FOR COMPONENTS
//=========================================
function placeholder_func() {
  $('.selected').removeClass('placeholder');
};

function menu_func() {
  $('.off-canvas').toggleClass('open');
  $('body').toggleClass('expand');
  $('.menu-btn').toggleClass('open');
  $('#menu-toggle').toggleClass('open');

};

function menu_close_func() {
  $('.off-canvas').toggleClass('open');
  $('body').toggleClass('expand');
  $('.menu-btn').toggleClass('open');
  $('#menu-toggle').toggleClass('open');
};
