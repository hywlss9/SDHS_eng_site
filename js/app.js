function event(){
   	$(document)
   	.on("mouseover", ".side-menu-list>li", function(){
      	$(".active").removeClass("active");
      	$(this).find("ul").addClass("active");
   	})
   	.on("mouseout", ".side-menu-list>li", function(){
      	$(this).find("ul").removeClass("active");
   	})
   	.on("scroll", function(){
      	let h = $("aside>img").height();
      	let dh = $(document).height();
      	let wh = $(window).height();
      	let st = $(document).scrollTop();
		let top= ((h-wh)*st)/(dh-wh);
      	$("aside>img").css({"top": -top+"px"});
   	})
}

window.onload = function(){
   	event();
}