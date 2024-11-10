/* hide panel elements */
function Main_Click(){
    $('.column-body').show(400);
    $('.content').hide();
    $('.panel').hide();
}

function MyWork_Click(){
    $('.MyWork').fadeIn(400);
    $('.panel:not(.MyWork)').hide();
}

function aboutMe_Click(){
    $('.AboutMe').fadeIn(400);
    $('.panel:not(.AboutMe)').hide();
}

function messageMe_Click(){
    $('.messageMe').fadeIn(400);
    $('.panel:not(.messageMe)').hide();
}

function OutZone_Click(){
    $('.panel').hide();
}

/* hide page elements */
function programs_work(){
    $('.content').hide();
    $('.panel').hide();
    $('.column-body').hide();
    $('.programs-page').show(400);
}

function video_work(){
    $('.content').hide();
    $('.panel').hide();
    $('.column-body').hide();
    $('.videos-page').show(400);
}

// function open github works
$(document).on('click', '.page-block', function(event){
    if (event.target.classList.contains('page-block-image')) {
        event.stopPropagation();
        return;
    }
    var a = $(this).attr('src');
    window.open(a, '_blank');
});

// protoshop/programs work dark-preview-mode
$(document).on('click', '.page-block-image', function(){
    if(window.innerWidth > 600)
    {
        $('.dark-preview').css('display', 'block');
        var a = $(this).attr('src');
        $('.dark-preview-image').attr('src', a);
    }
});
$(document).on('click', '.image-programs', function(){
    if(window.innerWidth > 600)
    {
        $('.dark-preview').css('display', 'block');
        var a = $(this).attr('src');
        $('.dark-preview-image').attr('src', a);
    }
});

var programs_image_css = {
    "width" : "600px",
    "height" : "300px",
    "margin" :"225px auto",
}
$(document).on('click', '.programs-line-body-image', function(){
    if(window.innerWidth > 600)
    {
        $('.dark-preview-block').css(programs_image_css);
        $('.dark-preview').css('display', 'block');
        var a = $(this).attr('src');
        $('.dark-preview-image').attr('src', a);
    }
});

$(document).on('click', '.dark-preview', function(){
    $('.dark-preview').css('display', 'none');
});

// hide panels 3 & 4 if small width page
timer = setInterval(() => { if(window.innerWidth < 500)
    {
    $('.AboutMe').hide(100),
    $('.messageMe').hide(100)
    }
}, 100);
