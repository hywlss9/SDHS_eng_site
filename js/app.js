var broserch = function(){ //브라우저 체크
    var word;
    var version = "N/A";
    var agent = navigator.userAgent.toLowerCase();
    var name = navigator.appName;

    // IE old version ( IE 10 or Lower )
    if ( name == "Microsoft Internet Explorer" ) word = "msie ";

    else {
        // IE 11
        if ( agent.search("trident") > -1 ) word = "trident/.*rv:";

        // IE 12  ( Microsoft Edge )
        else if ( agent.search("edge/") > -1 ) word = "edge/";
    }

    var reg = new RegExp( word + "([0-9]{1,})(\\.{0,}[0-9]{0,1})" );
    if (  reg.exec( agent ) != null  )
        version = RegExp.$1 + RegExp.$2;

    return version;
};
if(broserch() == "9.0" || broserch() == "8.0" || broserch() == "7.0" || broserch() == "6.0" || broserch() == "5.0"){
	alert("You are using an older browser. Please use the latest browser.");
	window.open('','_self').close();
}else{
	window.onload = function(){
	    event();
	    scroll();
	}
}

function event(){ //event
    $(document)
    .on("mouseenter", ".side-menu-list>li", function(){
        $(".active").removeClass("active");
        $(this).find("ul").addClass("active");
    })
    .on("mouseleave", ".side-menu-list>li", function(e){
        $(this).find("ul").removeClass("active");
    })
    .on("scroll", function(){
        scroll();
    })
    .on("mouseenter", ".side-menu-list>li>ul>li", function(){
    	$(this).css({"background":"#3aabdc"});
    	$(this).find("a").css({"color":"#fff"});
    })
    .on("mouseleave", ".side-menu-list>li>ul>li", function(){
    	$(this).css({"background":"none"});
    	$(this).find("a").css({"color":"#000"});
    })
}
function scroll(){ //sidemenu scroll event
   	var h = $("aside .sub-background").height();
    var dh = $(document).height();
    var wh = $(window).height();
    var st = $(document).scrollTop();
   	var top= ((h-wh)*st)/(dh-wh);
    $("aside .sub-background").css({"top": -top+"px"});
}