// JavaScript Document

$(document).ready(function() {
	
  var $ = jQuery

  jQuery(document).ready(function() {
    jQuery('.wtsp_share_btn').on('click', function() {
      jQuery('#wtsp_share').submit();
    })

  });

/*2. scrollspy*/
	
	
/*3.Share */
  $('#share').on('click', () => {
    if (navigator.share) {
      navigator.share({
          title: 'Web Share API Draft',
          text: 'Take a look at this spec!',
          url: 'https://wicg.github.io/web-share/#share-method',
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
      console.log('Share not supported on this browser, do it the old way.');
    }
  });

  /*4. Slider*/

  $('.comments').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dot: true,
    items: 1.3,
    center: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
	margin: 20,
    autoplayHoverPause: true,
	  responsive : {
    0 : {
        items:1,
    },
    900 : {
         items:2,
    },
    1200 : {
         items:3,
    }
	  }

  });


  $('.owl-gallery, .owl-services ').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dot: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1200,
    autoplayHoverPause: true,
	  	  responsive : {
		0 : {
			items:1,
		},
		900 : {
			 items:3,
		},
		1200 : {
			 items:4,
		}
    }

  });
	
	
const vheight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--vheight', `${window.innerHeight}px`)
}
window.addEventListener('resize', vheight)
vheight()
	
	
/**/
	
	var sectionIds = $('a.site-link');

    $(document).scroll(function(){
        sectionIds.each(function(){

            var container = $(this).attr('href');
            var containerOffset = $(container).offset().top;
            var containerHeight = $(container).outerHeight();
            var containerBottom = containerOffset + containerHeight;
            var scrollPosition = $(document).scrollTop();
    
            if(scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20){
                $(this).parent().addClass('active');
            } else{
                $(this).parent().removeClass('active');
            }
    
    
        });
    });
	
	
 });


/**/


   


/**/
	