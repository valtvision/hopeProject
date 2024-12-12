// Programs-pages
$(document).ready(function() {

    $('#banner-carousel').owlCarousel({
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: true,
        autoplay: true,
        items: 1,
        navSpeed: 700,
        navText: ['', ''],
        nav: false,
        autoplayHoverPause: true
    });

    $('#companiesHiring').owlCarousel({
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        autoplay: false,
        items: 4,
        margin: 20,
        autoWidth: true,
        autoplayHoverPause: true,
        navSpeed: 500,
        navText: ['', ''],
        nav: false
    });

    $('#aaftLife').owlCarousel({
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        autoplay: true,
        items: 4,
        margin: 10,
        autoWidth: true,
        autoplayHoverPause: true,
        navSpeed: 700,
        navText: ['', ''],
        nav: false
    });
   
    $('#imgSlide-carousel02').owlCarousel({
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: true,
        autoplay: true,
        items: 1,
        margin: 6,
        navSpeed: 700,
        navText: ['', ''],
        nav: false,
        autoplayHoverPause: true,
        autoWidth: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,

            },
            400: {
                items: 1,

            },
            576: {
                items: 1,

            },
            768: {
                items: 1,

            },
            992: {
                items: 1
            },
        }
    });
    $('#imgSlide-carousel-001').owlCarousel({
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: true,
        autoplay: true,
        items: 1,
        margin: 6,
        navSpeed: 700,
        navText: ['', ''],
        nav: false,
        autoplayHoverPause: true,
        autoWidth: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,

            },
            400: {
                items: 1,

            },
            576: {
                items: 2,

            },
            768: {
                items: 2,

            },
            992: {
                items: 1
            },
        }
    });
    


    $('#faculty-carousel').owlCarousel({
        loop: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        autoplay: true,
        margin: 30,
        navSpeed: 700,
        navText: ['', ''],
        nav: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 60
            },
            400: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 100
            },
            576: {
                items: 2,
                center: true,
                loop: true
            },
            768: {
                items: 3,
                loop: true,
                center: false
            },
            992: {
                items: 4
            },
        }
    });
    $('#faculty-carousel-blog').owlCarousel({
        loop: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        autoplay: true,
        margin: 30,
        navSpeed: 700,
        navText: ['', ''],
        nav: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 60
            },
            400: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 100
            },
            576: {
                items: 2,
                center: true,
                loop: true
            },
            768: {
                items: 3,
                loop: true,
                center: false
            },
            992: {
                items: 3
            },
        }
    });
    $('#celebrity-carousel-blog').owlCarousel({
        loop: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        autoplay: true,
        margin: 30,
        navSpeed: 700,
        navText: ['', ''],
        nav: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 60
            },
            400: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 100
            },
            576: {
                items: 2,
                center: true,
                loop: true
            },
            768: {
                items: 3,
                loop: true,
                center: false
            },
            992: {
                items: 3
            },
        }
    });
    $('#faculty-carousel-blog-view').owlCarousel({
        loop: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        autoplay: true,
        margin: 30,
        navSpeed: 700,
        navText: ['', ''],
        nav: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 60
            },
            400: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 100
            },
            576: {
                items: 2,
                center: true,
                loop: true
            },
            768: {
                items: 3,
                loop: true,
                center: false
            },
            992: {
                items: 3
            },
        }
    });
    $('#faculty-carousel-blog-view-one').owlCarousel({
        loop: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        autoplay: true,
        margin: 30,
        navSpeed: 700,
        navText: ['', ''],
        nav: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 60
            },
            400: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 100
            },
            576: {
                items: 2,
                center: true,
                loop: true
            },
            768: {
                items: 3,
                loop: true,
                center: false
            },
            992: {
                items: 3
            },
        }
    });
    $('#celebrity-carousel-70').owlCarousel({
        loop: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        autoplay: true,
        margin: 30,
        navSpeed: 700,
        navText: ['', ''],
        nav: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 60
            },
            400: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 100
            },
            576: {
                items: 2,
                center: true,
                loop: true
            },
            768: {
                items: 3,
                loop: true,
                center: false
            },
            992: {
                items: 3
            },
        }
    });
    
    $('#celebrity-carousel').owlCarousel({
        loop: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        autoplay: true,
        margin: 30,
        navSpeed: 700,
        navText: ['', ''],
        nav: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 60
            },
            400: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 100
            },
            576: {
                items: 2,
                center: true,
                loop: true
            },
            768: {
                items: 3,
                loop: true,
                center: false
            },
            992: {
                items: 4
            },
        }
    });
    $('#celebrity-carousel-blog-view').owlCarousel({
        loop: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        autoplay: true,
        margin: 30,
        navSpeed: 700,
        navText: ['', ''],
        nav: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 60
            },
            400: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 100
            },
            576: {
                items: 2,
                center: true,
                loop: true
            },
            768: {
                items: 3,
                loop: true,
                center: false
            },
            992: {
                items: 3
            },
        }
    });
    $('#celebrity-carousel-blog-view-one').owlCarousel({
        loop: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        autoplay: true,
        margin: 30,
        navSpeed: 700,
        navText: ['', ''],
        nav: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 60
            },
            400: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 100
            },
            576: {
                items: 2,
                center: true,
                loop: true
            },
            768: {
                items: 3,
                loop: true,
                center: false
            },
            992: {
                items: 3
            },
        }
    });

    
    $('#celebrity-carousel-04').owlCarousel({
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: true,
        autoplay: true,
        margin: 30,
        navSpeed: 700,
        navText: ['', ''],
        nav: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 60
            },
            400: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 100
            },
            576: {
                items: 2,
                center: true,
                loop: true
            },
            768: {
                items: 3,
                loop: true,
                center: false
            },
            992: {
                items: 4
            },
        }
    });
    $('#celebrity-carousel-2').owlCarousel({
        loop: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        autoplay: true,
        margin: 30,
        navSpeed: 700,
        navText: ['', ''],
        nav: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 60
            },
            400: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 100
            },
            576: {
                items: 2,
                center: true,
                loop: true
            },
            768: {
                items: 3,
                loop: true,
                center: false
            },
            992: {
                items: 4
            },
        }
    });
    $('#celebrity-carousel-alumni-3').owlCarousel({
        loop: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        autoplay: true,
        margin: 30,
        navSpeed: 700,
        navText: ['', ''],
        nav: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 60
            },
            400: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 100
            },
            576: {
                items: 2,
                center: true,
                loop: true
            },
            768: {
                items: 3,
                loop: true,
                center: false
            },
            992: {
                items: 4
            },
        }
    });
    $('#celebrity-carousel-alumni-4').owlCarousel({
        loop: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        autoplay: true,
        margin: 30,
        navSpeed: 700,
        navText: ['', ''],
        nav: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 60
            },
            400: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 100
            },
            576: {
                items: 2,
                center: true,
                loop: true
            },
            768: {
                items: 3,
                loop: true,
                center: false
            },
            992: {
                items: 4
            },
        }
    });
    $('#celebrity-carousel-alumni-5').owlCarousel({
        loop: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        autoplay: true,
        margin: 30,
        navSpeed: 700,
        navText: ['', ''],
        nav: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 60
            },
            400: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 100
            },
            576: {
                items: 2,
                center: true,
                loop: true
            },
            768: {
                items: 3,
                loop: true,
                center: false
            },
            992: {
                items: 4
            },
        }
    });
    $('#celebrity-carousel-alumni-6').owlCarousel({
        loop: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        autoplay: true,
        margin: 30,
        navSpeed: 700,
        navText: ['', ''],
        nav: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 60
            },
            400: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 100
            },
            576: {
                items: 2,
                center: true,
                loop: true
            },
            768: {
                items: 3,
                loop: true,
                center: false
            },
            992: {
                items: 4
            },
        }
    });
    $('#celebrity-carousel-alumni-8').owlCarousel({
        loop: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        autoplay: true,
        margin: 30,
        navSpeed: 700,
        navText: ['', ''],
        nav: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 60
            },
            400: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 100
            },
            576: {
                items: 2,
                center: true,
                loop: true
            },
            768: {
                items: 3,
                loop: true,
                center: false
            },
            992: {
                items: 4
            },
        }
    });
    $('#celebrity-carousel-alumni-9').owlCarousel({
        loop: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        autoplay: true,
        margin: 30,
        navSpeed: 700,
        navText: ['', ''],
        nav: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 60
            },
            400: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 100
            },
            576: {
                items: 2,
                center: true,
                loop: true
            },
            768: {
                items: 3,
                loop: true,
                center: false
            },
            992: {
                items: 4
            },
        }
    });
    $('#project-video').owlCarousel({
        loop: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        autoplay: true,
        margin: 30,
        navSpeed: 700,
        navText: ['', ''],
        nav: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 60
            },
            400: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 100
            },
            576: {
                items: 2,
                center: true,
                loop: true
            },
            768: {
                items: 3,
                loop: true,
                center: false
            },
            992: {
                items: 3
            },
        }
    });


});
// Programs-pages-end

// school-pages-start
$(document).ready(function() {
    $('#imgSlide-carousel').owlCarousel({
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: true,
        autoplay: true,
        autoWidth: true,
        autoHeight: true,
        autoplayHoverPause: true,
        items: 1,
        margin: 6,
        navSpeed: 700,
        navText: ['', ''],
        nav: false,
        // center:true
    });

    $('#imgText-carousel').owlCarousel({
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: true,
        autoplay: false,
        items: 1,
        autoWidth: true,
        margin: 60,
        navSpeed: 700,
        navText: ['', ''],
        nav: false,
    });

    $('#directors-carousel').owlCarousel({
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        autoplay: false,
        items: 3,
        stagePadding: 60,
        center: true,
        navSpeed: 700,
        nav: true,
        navText: ["<img src='/assets/Images/left-arrow.svg'>", "<img src='/assets/Images/right-arrow.svg'>"],
        autoplayHoverPause: true,
        dots: true,
        dotClass: 'custDot',
        dotsClass: 'd-flex justify-content-center',
        responsive: {
            0: { items: 1, loop: true, center: true, stagePadding: 60 },
            400: { items: 1, loop: true, center: true, stagePadding: 100 },
            576: { items: 2, center: true, loop: true, stagePadding: 0 },
            768: { items: 2, loop: true, center: true },
            992: { items: 3 },
        }
    });


});
// school-pages-end

// home-page-start
$(document).ready(function() {


    $('#companiesHiringhome').owlCarousel({
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: true,
        autoplay: true,
        items: 1,
        margin: 60,
        padding: 40,
        autoWidth: true,
        autoHeight: true,
        autoplayHoverPause: true,
        navSpeed: 500,
        navText: ['', ''],
        nav: false
    });

    $('#aaftLifehome').owlCarousel({
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: true,
        autoplay: true,
        items: 4,
        margin: 10,
        autoWidth: true,
        autoHeight: true,
        autoplayHoverPause: true,
        navSpeed: 2000,
        navText: ['', ''],
        nav: false,
    });

    $('#owl-carousel-degree').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
    $('#cards-degree').owlCarousel({
        loop: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: true,
        autoplay: true,
        margin: 10,
        navSpeed: 700,
        navText: ['', ''],
        nav: false,
        // autoWidth:true,
        // autoHeight:true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 0
            },
            400: {
                items: 1,
                loop: true,
                center: true,
                stagePadding: 100
            },
            576: {
                items: 2,
                center: true,
                loop: true
            },
            768: {
                items: 3,
                loop: true,
                center: false
            },
            992: {
                items: 3
            },
        }
    });

});
// home-page-end


// placement-workshop
$('#owl-carousl-workshop').owlCarousel({
    loop: true,
    margin: 60,
    items: 3,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: false,
    navSpeed: 700,
    navText: ['', ''],
    nav: true,
    center: true,
    autoplayHoverPause: true,
    autoWidth: true,
    autoHeight: true,
    responsive: {
        0: {
            items: 1,
            margin: 10,
            nav: true,
        },
        600: {
            items: 3,
            margin: 20,
        },
        1000: {
            items: 5
        }
    }
})
$('#owl-carousl-workshop-1').owlCarousel({
    loop: false,
    margin: 60,
    items: 3,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: false,
    navSpeed: 700,
    navText: ['', ''],
    nav: true,
    center: true,
    autoplayHoverPause: true,
    autoWidth: true,
    autoHeight: true,
    responsive: {
        0: {
            items: 1,
            margin: 10,
            nav: true,
        },
        600: {
            items: 3,
            margin: 20,
        },
        1000: {
            items: 5
        }
    }
})


$('#owl-carousl-workshop-2').owlCarousel({
    loop: true,
    margin: 60,
    items: 4,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: false,
    navSpeed: 700,
    navText: ['', ''],
    nav: true,
    center: true,
    autoplayHoverPause: true,
    autoWidth: true,
    autoHeight: true,
    responsive: {
        0: {
            items: 1,
            margin: 10,
            nav: true,
        },
        600: {
            items: 3,
            margin: 20,
        },
        1000: {
            items: 5
        }
    }
})
$('#owl-carousl-workshop-3').owlCarousel({
    loop: true,
    margin: 60,
    items: 4,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: false,
    navSpeed: 700,
    navText: ['', ''],
    nav: true,
    center: true,
    autoplayHoverPause: true,
    autoWidth: true,
    autoHeight: true,
    responsive: {
        0: {
            items: 1,
            margin: 10,
            nav: true,
        },
        600: {
            items: 3,
            margin: 20,
        },
        1000: {
            items: 5
        }
    }
})
$('#owl-carousl-workshop-4').owlCarousel({
    loop: true,
    margin: 60,
    items: 4,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: false,
    navSpeed: 700,
    navText: ['', ''],
    nav: true,
    center: true,
    autoplayHoverPause: true,
    autoWidth: true,
    autoHeight: true,
    responsive: {
        0: {
            items: 1,
            margin: 10,
            nav: true,
        },
        600: {
            items: 3,
            margin: 20,
        },
        1000: {
            items: 5
        }
    }
})
$('#owl-carousl-workshop-5').owlCarousel({
    loop: true,
    margin: 60,
    items: 4,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: false,
    navSpeed: 700,
    navText: ['', ''],
    nav: true,
    center: true,
    autoplayHoverPause: true,
    autoWidth: true,
    autoHeight: true,
    responsive: {
        0: {
            items: 1,
            margin: 10,
            nav: true,
        },
        600: {
            items: 3,
            margin: 20,
        },
        1000: {
            items: 5
        }
    }
})
$('#owl-carousl-workshop-6').owlCarousel({
    loop: true,
    margin: 60,
    items: 4,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: false,
    navSpeed: 700,
    navText: ['', ''],
    nav: true,
    center: true,
    autoplayHoverPause: true,
    autoWidth: true,
    autoHeight: true,
    responsive: {
        0: {
            items: 1,
            margin: 10,
            nav: true,
        },
        600: {
            items: 3,
            margin: 20,
        },
        1000: {
            items: 5
        }
    }
})
$('#owl-carousl-workshop-7').owlCarousel({
    loop: true,
    margin: 60,
    items: 4,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: false,
    navSpeed: 700,
    navText: ['', ''],
    nav: true,
    center: true,
    autoplayHoverPause: true,
    autoWidth: true,
    autoHeight: true,
    responsive: {
        0: {
            items: 1,
            margin: 10,
            nav: true,
        },
        600: {
            items: 3,
            margin: 20,
        },
        1000: {
            items: 5
        }
    }
})
$('#owl-carousl-workshop-8').owlCarousel({
    loop: true,
    margin: 60,
    items: 4,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: false,
    navSpeed: 700,
    navText: ['', ''],
    nav: true,
    center: true,
    autoplayHoverPause: true,
    autoWidth: true,
    autoHeight: true,
    responsive: {
        0: {
            items: 1,
            margin: 10,
            nav: true,
        },
        600: {
            items: 3,
            margin: 20,
        },
        1000: {
            items: 5
        }
    }
})
$('#owl-carousl-workshop-9').owlCarousel({
    loop: true,
    margin: 60,
    items: 4,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: false,
    navSpeed: 700,
    navText: ['', ''],
    nav: true,
    center: true,
    autoplayHoverPause: true,
    autoWidth: true,
    autoHeight: true,
    responsive: {
        0: {
            items: 1,
            margin: 10,
            nav: true,
        },
        600: {
            items: 3,
            margin: 20,
        },
        1000: {
            items: 5
        }
    }
})
$('#owl-carousl-leadership').owlCarousel({
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    margin: 30,
    navSpeed: 700,
    navText: ['', ''],
    nav: false,
    autoWidth: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            loop: true,
            center: true,
        },
        400: {
            items: 1,
            loop: true,
            center: true,
        },
        576: {
            items: 2,
            center: true,
            loop: true
        },
        768: {
            items: 3,
            loop: true,
            center: false
        },
        992: {
            items: 4
        },
    }
})
$('#owl-carousl-leadership-3').owlCarousel({
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    margin: 30,
    navSpeed: 700,
    navText: ['', ''],
    nav: false,
    autoWidth: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            loop: true,
            center: true,
        },
        400: {
            items: 1,
            loop: true,
            center: true,
        },
        576: {
            items: 2,
            center: true,
            loop: true
        },
        768: {
            items: 3,
            loop: true,
            center: false
        },
        992: {
            items: 4
        },
    }
})

$('#owl-carousl-leadership-5').owlCarousel({
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    margin: 30,
    navSpeed: 700,
    navText: ['', ''],
    nav: false,
    autoWidth: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            loop: true,
            center: true,
        },
        400: {
            items: 1,
            loop: true,
            center: true,
        },
        576: {
            items: 2,
            center: true,
            loop: true
        },
        768: {
            items: 3,
            loop: true,
            center: false
        },
        992: {
            items: 4
        },
    }
})
$('#owl-carousl-leadership-70').owlCarousel({
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    margin: 30,
    navSpeed: 700,
    navText: ['', ''],
    nav: false,
    autoWidth: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            loop: true,
            center: true,
        },
        400: {
            items: 1,
            loop: true,
            center: true,
        },
        576: {
            items: 2,
            center: true,
            loop: true
        },
        768: {
            items: 3,
            loop: true,
            center: false
        },
        992: {
            items: 3
        },
    }
})


$('#owl-carousl-leadership-2').owlCarousel({
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    margin: 30,
    navSpeed: 700,
    navText: ['', ''],
    nav: false,
    autoWidth: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            loop: true,
            center: true,
        },
        400: {
            items: 1,
            loop: true,
            center: true,
        },
        576: {
            items: 2,
            center: true,
            loop: true
        },
        768: {
            items: 3,
            loop: true,
            center: false
        },
        992: {
            items: 4
        },
    }
})
$('#owl-carousl-leadership-6').owlCarousel({
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    margin: 30,
    navSpeed: 700,
    navText: ['', ''],
    nav: false,
    autoWidth: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            loop: true,
            center: true,
        },
        400: {
            items: 1,
            loop: true,
            center: true,
        },
        576: {
            items: 2,
            center: true,
            loop: true
        },
        768: {
            items: 3,
            loop: true,
            center: false
        },
        992: {
            items: 4
        },
    }
})
$('#owl-carousl-leadership-7').owlCarousel({
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    margin: 30,
    navSpeed: 700,
    navText: ['', ''],
    nav: false,
    autoWidth: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            loop: true,
            center: true,
        },
        400: {
            items: 1,
            loop: true,
            center: true,
        },
        576: {
            items: 2,
            center: true,
            loop: true
        },
        768: {
            items: 3,
            loop: true,
            center: false
        },
        992: {
            items: 4
        },
    }
})

$('#owl-carousl-academics-board').owlCarousel({
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    navSpeed: 700,
    items: 3,
    navText: ['', ''],
    nav: false,
    center: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            loop: true,
            center: true,
        },
        400: {
            items: 1,
            loop: true,
            center: true,
        },
        576: {
            items: 1,
            center: true,
            loop: true
        },
        768: {
            items: 2,
            loop: true,
            center: false
        },
        992: {
            items: 2,
            center: true,
        },
        1000: {
            items: 3,
            center: true,
        },
    }
})
$('#owl-carousl-academics-board-02').owlCarousel({
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin: 30,
    autoplay: false,
    navSpeed: 700,
    items: 3,
    navText: ['', ''],
    nav: false,
    center: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            loop: true,
            center: true,
        },
        400: {
            items: 1,
            loop: true,
            center: true,
        },
        576: {
            items: 1,
            center: true,
            loop: true
        },
        768: {
            items: 2,
            loop: true,
            center: false
        },
        992: {
            items: 2,
            center: true,
        },
        1000: {
            items: 3,
            autoplay: false,
            center: true,
        },
    }
})
$('#owl-carousl-academics-board-03').owlCarousel({
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    navSpeed: 700,
    items: 3,
    navText: ['', ''],
    nav: false,
    center: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            loop: true,
            center: true,
        },
        400: {
            items: 1,
            loop: true,
            center: true,
        },
        576: {
            items: 1,
            center: true,
            loop: true
        },
        768: {
            items: 2,
            loop: true,
            center: false
        },
        992: {
            items: 2,
            center: true,
        },
        1000: {
            items: 3,
            autoplay: false,
            center: true,
        },
    }
})

// placement-workshop-end


// board-of-director
$('.owl-carousl-board-director').owlCarousel({
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        autoplay: true,
        margin: 30,
        navSpeed: 700,
        navText: ['', ''],
        nav: false,
        autoWidth: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                loop: true,
                center: true,
            },
            400: {
                items: 1,
                loop: true,
                center: true,
            },
            576: {
                items: 2,
                center: true,
                loop: true
            },
            768: {
                items: 3,
                loop: true,
                center: false
            },
            992: {
                items: 4
            },
        }
    })
    // board-of-director-end