$(document).ready(function() {

// одинаковой высоты разные по длине ашки
 $(".preim-block-p").equalHeights();
 $(".preim-block-h3").equalHeights();
  
	// Плавный скролл по якорям плагин PageScroll2id
	$(".top-menu ul li a, .angle-down a").mPageScroll2id({
		offset: ".top-line",
		  layout:"auto",
		scrollEasing: "linear",
		highlightByNextTarget: true,
		keepHighlightUntilNext: true,
		 autoScrollSpeed: true,
		scrollSpeed : 1200
	});
 
// вверхнее красиво-вращающееся меню
// 1 и 2 строка это анимация крестика
//3 строка - слайдер вниз меню
$(".toggle-mnu").click(function() {
$(this).toggleClass("on");
$(".top-menu").slideToggle();
return false;
});

// галерея всплывающая
$(".portfolio-item").each(function(e){
var th = $(this);
th.attr("href", "#portfolio-image-" + e)
.find(".portfolio-popup")
.attr("id", "portfolio-image-" + e);
});
$(".portfolio-item").magnificPopup({
mainClass: 'my-mfp-zoom-in',
removalDelay:300,
type:'inline',
});




	

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	// $(".block").waypoint(function(direction) {
	// 	if (direction === "down") {
	// 		$(".class").addClass("active");
	// 	} else if (direction === "up") {
	// 		$(".class").removeClass("deactive");
	// 	};
	// }, {offset: 100});



//Кнопка наверх с права от контента
$("body").append('<div class="top"><i class="fa fa-angle-double-up" aria-hidden="true"></i></div>');
// Заставляет кнопку работать как ссылку на самый вверх
$("body").on("click", ".top", function() {
	$("html, body").animate({scrollTop: 0}, 1200);
});
// Заставляет прятаться кнопку, если посетитель на хедере
$(window).scroll(function() {
if ($(this).scrollTop() > $(this).height()) {
	$(".top").addClass("active");
} else 
{  	$(".top").removeClass("active");
}
});



	

// всплывающие окна позвонить мне
$("a[href='#call-back']").magnificPopup ({
	mainClass:'my-mfp-zoom-in',
	removalDelay:300,
	type:'inline',
}); 
/*чтобы в формах был индивидуальный заголовок */
$("a[href='#call-back']").click(function(){
	var dataForm = $(this).data("form");
	var dataText = $(this).data("text");
	$(".forms-call h4").text(dataText);
	$(".forms-call [name=admin-data]").val(dataForm);

});

//Аякс отправка форм.

	//Документация: http://api.jquery.com/jquery.ajax/

$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".forms-calldecor .success").addClass("active");
			setTimeout(function() {
				// Done Functions
				$(".forms-calldecor .success").removeClass("active");
				th.trigger("reset");
				$.magnificPopup.close();
			}, 1000);
		});
		return false;
	});


});