// JavaScript Document
$(document).on("pagecreate","#page2",function(){
	$("#inde1").on("swipe",function(){
		$("#tr5").text("detectado");
	});
});

$(document).on("pagecreate","#page3",function(){
	$("#tap1").on("tap", function(){
		$(this).hide();
	});
});

$(document).on("pagecreate","#page4",function(){
	$("#taph").on("taphold",function(){
		$(this).hide();
	});
 });
 
 
$(document).on("pagecreate","#page5",function(){
	$("#sw1").on("swipeleft",function(){
		alert("Hola");
	});
});

$(document).on("pagecreate","#page6",function(){
	$("#sw2").on("swiperight",function(){
		alert("Hey");
	});
});