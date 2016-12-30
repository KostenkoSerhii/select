// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js

/*sayHello();
*/
$(document).ready(function(){

	function generationSelectEnvironment(nameSelector){
		var selector =  document.querySelectorAll("" + nameSelector);
/*		selector.wrap("<form></form>")
		.wrap("<div class='wrapper'></div>")
		.before("<div class='town-view'>Город*</div>");*/
		alert(selector);
	};
	generationSelectEnvironment("town_select");
	$/*(".town-view").on("click", function(){
		var thisSelect = $(this).next().children(".town-select");
		thisSelect.attr("size","6");
		$(".town-select").not(thisSelect).hide();
		thisSelect.slideToggle(300);
	});*/

/*	$(".town-select option").on("click", function(){
		var optionText = $(this).text();
		$(this).parent().parent().prev(".town-view").html(optionText);
		$(this).attr("selected", true);
		$(this).siblings().removeAttr("selected");
		$(this).parents(".town-select").slideUp();
	});*/
	
/*	$(document).mouseup(function (e){ 
		var selectBlock = $(".town-select-wrapper"); 
		if (!selectBlock.is(e.target) && selectBlock.has(e.target).length === 0) { 
			$(".town-select").slideUp(); 
		}
	});*/

});