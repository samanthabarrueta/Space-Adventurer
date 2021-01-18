$(document).keydown(function(e) {
    switch (e.which) {
    case 37:
        $('#user').finish().animate({
            left: '-=50'
        });
        break;
    case 39:
        $('#user').finish().animate({
            left: '+=50'
        });
        break;
    case 32:
        $('#bullet').animate({
            bottom: '+=620'
        });
        break;
    };
});

