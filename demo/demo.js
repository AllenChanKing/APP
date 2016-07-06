$(function(){
	$("ul li").on("click",function(){
		var $cur = $(this);
		var index = $cur.index();

		if($cur.attr("class") && ($cur.attr("class").indexOf("showdesc")!=-1)){
			$("ul li").removeClass("showdesc");
		}else{
			$("ul li").removeClass("showdesc");
			$cur.addClass("showdesc");
		}

	})
});