let audio1 = new Audio('https://www.mboxdrive.com/049449746_prev%20(mp3cut.net).mp3');
let audio2 = new Audio('https://www.mboxdrive.com/van.mp3');

anime({
    targets: '#yassine path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1200,
    delay: function (el, i) { return i * 700 },
    direction: 'normal',
    loop: true
});


$('button').click(_ => {
    $('button').toggleClass('inactive');
    if ($('button').hasClass('inactive')) {
        $('button').html('<i class="fas fa-volume-mute"></i>');
        audio1.pause();
    }

    else {
        $('button').html('<i class="fas fa-volume-up"></i>')
        audio1.play();
        audio1.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);
    }

});


$('.flip-card').hover(function () {
    audio1.pause();
    if (!$('button').hasClass('inactive')) audio2.play();

}, function () {
    // out
    if (!$('button').hasClass('inactive')) {
        audio1.play();
        audio2.pause();
    }

}
);



