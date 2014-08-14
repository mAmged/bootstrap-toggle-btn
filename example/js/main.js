var sound;
$(document).ready(function() {
    soundManager.setup({
        url: '/player/soundmanager/',
        onready: function() {}
    });

    $('.close-playlist').click(function() {
        $('.playlist').addClass("colsed")
    });
    $('.keypad').click(function() {
        $('.playlist').removeClass("colsed")
    })
});
$(document).ready(function() {

    $('#nestable3').nestable();
});
//mp3
$(document).ready(function() {
    $('.dd3-content').click(function() {
        var item = $(this);
        sound = playSound(item);
    });
    //end item click
    $('.next').click(function(){
    	playSound($('.playing').removeClass("playing").parent().next().children(".dd3-content"))
    });

    $('.back').click(function(){
    	playSound($('.playing').removeClass("playing").parent().prev().children(".dd3-content"))
    });

    $('.puase-play').click(function(){
    	if(sound){
	    	if(!sound.paused){
	    		sound.pause();
	    		$(this).attr('src',$(this).attr('src').replace(/pause.png/,'play.png'))
	    		reset();
	    	}
	    	else
	    	{
	    		sound.play();
	    		$(this).attr('src',$(this).attr('src').replace(/play.png/,'pause.png'))
	    	}
    	}
    	else
    	{
    		sound = playSound($('.dd3-content').first());
    		$(this).attr('src',$(this).attr('src').replace(/play.png/,'pause.png'))
    	}
    })
    $('.refresh').click(function(){
    	sound.stop().play();
    })

})
function playSound(item){
	reset()
    $(item).addClass("playing");
    try{sound.stop();}catch(e){}
    $('img.pp').attr("src", item.data('cover')).data('id',item.data('url'));
	return soundManager.createSound({
            id: item.data('url'),
            url: item.data('url')
        }).play();
}
function reset(){
	$('.playing').removeClass("playing");
}