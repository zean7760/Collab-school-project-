function fnmouseenter() {
	$("img.logo").attr("src", "assets/img/logoANDCallaborateORANGE.png");
}

function fnmouseleave() {
	$("img.logo").attr("src", "assets/img/logoANDCallaborateGREY.png");
}

function ProjectSeekers(){
	$('#ProjectSeekers').show();
	$('#JoinProject').hide();
	$('#JoinProject2').hide();
	$('#JoinProject3').hide();
}

function JoinProject(){
	$('#JoinProject').show();
	$('#JoinProject2').show();
	$('#JoinProject3').show();
	$('#ProjectSeekers').hide();
}

var count = 0;
function switchImage() {
	$(".img_fit").animate({ opacity: 0.0 }, 500, function () {
		if (count < 2) {
			count++;
		} else {
			count = 0;
		}
		$(".img_fit").attr("src", slides[count]).animate({ opacity: 1.0 }, 500);
	});
}



$(document).ready(function() {
	$('.videoIMG').hide();
	$('#dropdown').on('change', function() {
        if ( ['field2', 'field3'].indexOf( this.value ) > -1 )
        {
            $("#image").show();
        }
        else
        {
            $("#image").hide();
        }
    })
    .change();
	var slides=new Array(
	"assets/img/posts/robot.jpg","assets/img/posts/records.jpg",
	"assets/img/posts/website.jpg","assets/img/posts/artAbstract.jpg");
	var people =["assets/img/users/1.jpg","assets/img/users/2.jpg","assets/img/users/3.jpg",
"assets/img/users/4.jpg"];
	var count = 0;
	switchImage2();

	function switchImage2() {
		if (count >= slides.length) {
			count = 0;
		} $(".Recentbox").css(
			"background-image" ,
			'linear-gradient( rgba(34,34,34,0.2), rgba(34,34,34,0.2)), url("' + slides[count++]+'")'
			).fadeIn(1000, function() {
				setTimeout(switchImage2, 4000);
				});
				$(".img_fit").attr("src", people[count]).animate({ opacity: 1.0 }, 500);

		}

	$("img.logo").hover(fnmouseenter, fnmouseleave);

	$('ul.nav li.dropdown').hover(function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
	}, function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
	});

	$('#radio1').click(JoinProject);
	$('#radio2').click(ProjectSeekers);

	$('.dropdown-menu a').click(function(){
    $('#selected').text($(this).text());
  });

	//When distance from top = 250px fade button in/out
	$(window).scroll(function(){
		if ($(this).scrollTop() > 250) {
			$('#scrollup').fadeIn(300);
		} else {
			$('#scrollup').fadeOut(300);
		}
	});

	//On click scroll to top of page t = 1000ms
	$('#scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 1000);
		return false;
	});
});
