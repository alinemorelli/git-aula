$(document).ready(function () {
    $(".inptTeste").focusin(function () {
        $(this).prev(".inptPlaceholder").css("top", "-30px");
    });
    $(".inptTeste").focusout(function () {
        var value = $.trim($(this).val());
        if (value == "") {
            $(this).prev(".inptPlaceholder").css("top", "0");
        }
    });

    $(".formTeste").submit(function(event){
    	event.preventDefault();
    	var nome = $("#nome").val();
    	$(".page-1").fadeOut();
    	$(".page-2").fadeIn();
    	$("#nome-aluno").html(nome);
    });

    $(".proximo.first").click(function(event){
    	event.preventDefault();
    	$(".page-2").fadeOut();
    	$(".page-3").fadeIn();
    });

    $(".proximo.second").click(function(event){
    	event.preventDefault();
    	$(".page-3").fadeOut();
    	$(".page-4").fadeIn();
    });

    $(".proximo.third").click(function(event){
    	event.preventDefault();
    	$(".page-4").fadeOut();
    	$(".page-5").fadeIn();
    });

    $(".proximo.fourth").click(function(event){
    	event.preventDefault();
    	$(".page-5").fadeOut();
    	$(".page-6").fadeIn();
    	$("html, body").scrollTop(0);
    });
});