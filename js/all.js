$(document).ready(function() {

    //Scroll Top Starts
    let topBtn = document.querySelector(".top-btn");
    topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
    window.onscroll = () => window.scrollY > 200 ? topBtn.style.opacity = 1 : topBtn.style.opacity = 0;
    //Scroll Top Ends
    //
    //
    //
    //




    //Fancy Gallery Starts
    // const myCarousel = new Carousel(document.querySelector("#myCarousel"), {
    //     preload: 1
    // });


    // Fancybox.assign('[data-fancybox="carousel-gallery"]', {
    //     closeButton: "top",
    //     Thumbs: false,
    //     Carousel: {
    //         Dots: true,
    //         on: {
    //             change: (that) => {
    //                 myCarousel.slideTo(myCarousel.getPageforSlide(that.page), {
    //                     friction: 0
    //                 });
    //             }
    //         }
    //     }
    // });
    // //Fancy Gallery Ends
    // //
    // //
    // //
    // //

    // $('.carousel').carousel();


    $('.product-carousel').owlCarousel({
        // autoplay: true,
        rewind: true,
        /* use rewind if you don't want loop */
        margin: 30,
        responsiveClass: true,
        autoHeight: true,
        // autoplayTimeout: 4000,
        // smartSpeed: 800,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },

            600: {
                items: 2
            },

            1024: {
                items: 3
            },

            1366: {
                items: 3
            }
        }
    });

    $('#banner-carousel').carousel();

    $(".nav-link").on("shown.bs.tab", function(e) {
        var href = $(this).attr("data-bs-target");

        // You can adjust the offset as needed
        var offset = 150; // For example, set it to 50 pixels

        $("html, body").animate({
                scrollTop: $(href).offset().top - offset
            },
            "slow"
        );
    });

    $('.owl_1').owlCarousel({
        // autoplay: true,
        rewind: true,
        /* use rewind if you don't want loop */
        margin: 30,
        responsiveClass: true,
        autoHeight: true,
        // autoplayTimeout: 4000,
        // smartSpeed: 800,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },

            600: {
                items: 2
            },

            1024: {
                items: 3
            },

            1366: {
                items: 3
            }
        }
    });

    var li = $(".owl-item li ");
    $(".owl-item li").click(function() {
        li.removeClass('active');
    });
});