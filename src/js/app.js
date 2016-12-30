// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js

/*sayHello();
*/
$(document).ready(function(){
	$(".block").on("click", function(){
		$(".toogle").slideToggle(300);
	});
	$(".toogle option").on("click", function(){
		var t = $(this).text();
		$(".block").html(t); 
		$(".toogle").slideUp();
	});
	$(document).mouseup(function (e){ 
		var selectBlock = $(".container"); 
		if (!selectBlock.is(e.target) && selectBlock.has(e.target).length === 0) { 
			$(".toogle").slideUp(); 
		}
	});
});