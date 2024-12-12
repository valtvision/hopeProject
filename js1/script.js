// programmes - apply
var current_fs, next_fs, previous_fs;
var left, opacity, scale;
var animating;

$(".next").click(function () {
    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");


    next_fs.show();

    current_fs.animate({ opacity: 0 }, {
        step: function (now, mx) {
           current_fs.css({
                'transform': 'scale(' + scale + ')',
                'position': 'absolute'
            });
            next_fs.css({ 'left': left, 'opacity': opacity });
        },
        // duration: 800,
        complete: function () {
            current_fs.hide();
            animating = false;
        },
        easing: 'easeInOutBack'
    });
});

$(".previous").click(function () {
    if (animating) return false;
    animating = false;
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();
   $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
    previous_fs.show();
    current_fs.animate({ opacity: 0 }, {
        step: function (now, mx) {
                       opacity = 1 - now;
            current_fs.css({ 'left': left });
            previous_fs.css({ 'transform': 'scale(' + scale + ')', 'opacity': opacity });
        },
        // duration: 800,
        complete: function () {
            current_fs.hide();
            animating = false;
        },
    
        easing: 'easeInOutBack'
    });
});

$(".submit").click(function () {
    return false;
})

// programmes-apply-end

// view-course
function gotosite01() {
    window.location = document.getElementById("menulink-01").value; // JQuery:  $("#menu").val();
}
function gotosite02() {
    window.location = document.getElementById("menulink-02").value; // JQuery:  $("#menu").val();
}
function gotosite03() {
    window.location = document.getElementById("menulink-03").value; // JQuery:  $("#menu").val();
}
// view-course-end