$(document).ready(function (){

    $("#button1").click(function(){
        var nextImage = $(this).parent().next().children().first();
        var nextImageSrc = nextImage.attr('src');
        var thisSrc = $(this).prev().attr('src');
        $(this).prev().attr('src', nextImageSrc);
        nextImage.attr('src', thisSrc);
    });

    $("#button2").click(function(){
        var randomNumber = Math.floor(Math.random()*2);
        var nextImage = $(this).parent().next().children().first();
        var nextImageSrc = nextImage.attr('src');
        var previousImage = $(this).parent().prev().children().first();
        var previousImageSrc = previousImage.attr('src');
        var thisImage = $(this).prev();
        var thisSrc = thisImage.attr('src');
        if (randomNumber === 0){
            previousImage.attr('src', thisSrc);
            thisImage.attr('src', previousImageSrc);
        } else {
            $(this).prev().attr('src', nextImageSrc);
            nextImage.attr('src', thisSrc);
        }
    });

    $("#button3").click(function(){
        var previousImage = $(this).parent().prev().children().first();
        var previousImageSrc = previousImage.attr('src');
        var thisImage = $(this).prev();
        var thisSrc = thisImage.attr('src');
        previousImage.attr('src', thisSrc);
        thisImage.attr('src', previousImageSrc);
    });
});