function event(){
    $(document)
    // .on("mousemove", function(e){
    // 	if($(e.target).parent("ul").attr("class") == "side-menu-list"){
    // 		$(".active").removeClass("active");
    //     	$(this).find("ul").addClass("active");
    // 	}else if($(e.target).parents("ul").attr("class") == "side-menu-list"){
    // 		$(this).addClass("active");
    // 	}else{
    // 		$(document).find("ul").removeClass("active");
    // 	}
    // })
    .on("mouseover", ".side-menu-list>li ul", function(e){
        $(this).addClass("active");
    })
    .on("mouseover", ".side-menu-list>li", function(){
        $(".active").removeClass("active");
        $(this).find("ul").addClass("active");
    })
    .on("mouseout", ".side-menu-list>li", function(e){
        $(this).find("ul").removeClass("active");
    })
    .on("scroll", function(){
        scroll();
    })
}
function scroll(){
   	var h = $("aside>img").height();
    var dh = $(document).height();
    var wh = $(window).height();
    var st = $(document).scrollTop();
   	var top= ((h-wh)*st)/(dh-wh);
    $("aside>img").css({"top": -top+"px"});
}
window.onload = function(){
    event();
    scroll();
}