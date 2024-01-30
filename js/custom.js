$(document).ready(function(){

    $(".trending_list li").on("click", function(){

        $(".trending_list li").removeClass("active")
        
        $(this).addClass("active");

        let attrVal = $(this).attr("data-tab");

        $(".trending_group").removeClass("active");

        $("#"+attrVal).addClass("active");

    });

    
    $('.list_trending').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: `<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-right-long"></i></button>`,
        prevArrow: `<button type="button" class="slick-next"><i class="fa-solid fa-arrow-left-long"></i></button>`,
        responsive: [
            
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
              }
            },
            

          ]
    });
    
});
