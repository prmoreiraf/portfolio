jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});
/**************MODAL**************/
$(".modal-trigger").click(function(e){
  e.preventDefault();
  dataModalEmma = $(this).attr("data-modal-emma");
  $("#" + dataModalEmma).css({"display":"block"});
  // $("body").css({"overflow-y": "hidden"}); //Prevent double scrollbar.
});

$(".modal-trigger").click(function(e){
  e.preventDefault();
  dataModalPlantinhas = $(this).attr("data-modal-plantinhas");
  $("#" + dataModalPlantinhas).css({"display":"block"});
  // $("body").css({"overflow-y": "hidden"}); //Prevent double scrollbar.
});

$(".modal-trigger").click(function(e){
  e.preventDefault();
  dataModalFlyer = $(this).attr("data-modal-flyer");
  $("#" + dataModalFlyer).css({"display":"block"});
  // $("body").css({"overflow-y": "hidden"}); //Prevent double scrollbar.
});

$(".modal-trigger").click(function(e){
  e.preventDefault();
  dataModalQuatro = $(this).attr("data-modal-quatro");
  $("#" + dataModalQuatro).css({"display":"block"});
  // $("body").css({"overflow-y": "hidden"}); //Prevent double scrollbar.
});

$(".close-modal, .modal-sandbox").click(function(){
  $(".modal").css({"display":"none"});
  // $("body").css({"overflow-y": "auto"}); //Prevent double scrollbar.
});
/***************ondulação********************/
