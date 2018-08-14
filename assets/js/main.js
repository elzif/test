/* Mega Menu */
$(document).ready(function() {    
  $('.megamenu .navbar-nav > li.dropdown').hover(function() {
    $('ul.dropdown-menu', this).stop(true, true).slideDown('slow');
    $(this).addClass('open');
  }, function() {
  $('ul.dropdown-menu', this).stop(true, true).slideUp('fast');
    $(this).removeClass('open');
  });
});

/* Mega Menu Toggle */
$(document).ready(function() {
    $('#menu .whatwedo-toggle').hide();
    $('#menu .whatwedo-toggle.active').show();
    $('#menu .menu-left .toggle').hover(function(){
        $('#menu .menu-left .toggle').removeClass('active');
        $(this).addClass('active');
        var target = "#" + $(this).data("target");
        $("#menu .whatwedo-toggle").not(target).fadeOut().finish().promise().done(function(){
            $(target).fadeIn();
        });
    });
});

/* Toggle Panel */
$(document).ready(function() {
    $('.icon-list').hide();
    $('.icon-list.active').show();
    $('.left-panel .toggle').click(function(){
        $('.left-panel .toggle').removeClass('active');
        $(this).addClass('active');
        var target = "#" + $(this).data("target");
        $(".icon-list").fadeOut("slow").finish().promise().done(function(){
            $(target).fadeIn("slow");
            //alert("done");
        });
    });
});

 /* Replace all SVG images with inline SVG */
$(document).ready(function() {
    $('img[src$=".svg"]').each(function() {
        var $img = jQuery(this);
        var imgURL = $img.attr('src');
        var attributes = $img.prop("attributes");

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Remove any invalid XML tags
            $svg = $svg.removeAttr('xmlns:a');

            // Loop through IMG attributes and apply on SVG
            $.each(attributes, function() {
                $svg.attr(this.name, this.value);
            });

            // Replace IMG with SVG
            $img.replaceWith($svg);
        }, 'xml');
    });
});


/* Toggle Panel */
$(document).ready(function() {
    $('header .search').click(function(){
        $('#search-content').toggleClass('active');
        $('body').toggleClass('overflow-hidden');
    });

    $('#search-content .cancel').click(function(){
        $('#search-content').removeClass('active');
        $('body').removeClass('overflow-hidden');
    });
});